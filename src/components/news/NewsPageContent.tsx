import {useQuery} from "@tanstack/react-query";
import styles from "./NewsPageContent.module.scss";
import PostCard from "./content/postcard/PostCard.tsx";
import {NewsPostContainer} from "@/scripts/model/NewsPostContainer.tsx";
import {fetchAllNewsPosts} from "@/scripts/newsPosts.ts";
import {JSX, useEffect, useState} from "react";
import Label from "@/components/label/Label.tsx";


const newsStyleSection = (element: JSX.Element) => {
    return (
        <section className={styles.newsPageBackground}>
            <Label />
            {element}
        </section>
    );
};

const pageRef: string = "/news?page=";


function NewsPageContent({ page }: { page: number }) {
    const [postsPerPage, setPostsPerPage] = useState(8);

    useEffect(() => {
        const updatePostsPerPage = () => {
            if (window.innerWidth <= 768) {
                setPostsPerPage(4); // Phone: 3 posts per page
            } else {
                setPostsPerPage(8); // Default: 8 posts per page
            }
        };

        updatePostsPerPage();
        window.addEventListener("resize", updatePostsPerPage);
        return () => window.removeEventListener("resize", updatePostsPerPage);
    }, []);

    const {
        data: newsPosts,
        isLoading,
        error,
    } = useQuery<NewsPostContainer[]>({
        queryKey: ["allNewsPosts"],
        queryFn: fetchAllNewsPosts,
    });

    if (isLoading) return newsStyleSection(<h2>Loading news posts...</h2>);
    if (error) return newsStyleSection(<h2>Error fetching news posts: {error.message}</h2>);
    if (!newsPosts) return newsStyleSection(<h2>No news posts found.</h2>);

    // Pagination logic
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = newsPosts.slice(startIndex, endIndex);
    const numOfPages = Math.ceil(newsPosts.length / postsPerPage);

    if (paginatedPosts.length === 0) {
        if (page > numOfPages) {
            window.location.href = `${pageRef}${numOfPages}`;
        } else {
            window.location.href = `/news`;
        }
    }

    let carouselNav = styles.carouselNav;
    if (paginatedPosts.length <= 4) {
        carouselNav = styles.halfCardsCarouselNav;
    }

    return newsStyleSection(
        <div className={styles.postList}>
            {paginatedPosts.map((post: NewsPostContainer, index: number) => {
                const isFirstPage = page === 1;
                const biggerContainer = isFirstPage && index < 4;

                return (
                    <PostCard
                        newsPost={post}
                        biggerContainer={!biggerContainer}
                        key={post.id}
                    />
                );
            })}
            <div className={carouselNav}>
                <a className={styles.carouselNavBack} href={`${pageRef}${page - 1}`}>
                    <div className={styles.carouselArrow} />
                </a>
                {Array.from({ length: numOfPages }, (_, i) => (
                    <a key={i} className={styles.carouselNavDot} href={`${pageRef}${i + 1}`} />
                ))}
                <a className={styles.carouselNavForward} href={`${pageRef}${page + 1}`}>
                    <div className={styles.carouselArrow} />
                </a>
            </div>
        </div>
    );
}

export default NewsPageContent;