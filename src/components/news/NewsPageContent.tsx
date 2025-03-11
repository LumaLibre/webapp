import {useQuery} from "@tanstack/react-query";
import styles from "./NewsPageContent.module.scss";
import PostCard from "./content/postcard/PostCard.tsx";
import {NewsPostContainer} from "@/scripts/model/NewsPostContainer.tsx";
import {fetchAllNewsPosts} from "@/scripts/newsPosts.ts";
import {JSX} from "react";


const newsStyleSection = (element: JSX.Element) => {
    return (
        <section className={styles.newsPageBackground}>
            {element}
        </section>
    );
};

const pageRef: string = "/news?page=";


function NewsPageContent({page}: { page: number }) {

    const {
        data: newsPosts,
        isLoading,
        error,
    } = useQuery<NewsPostContainer[]>({
        queryKey: ["allNewsPosts"], // A unique cache key for fetching all posts
        queryFn: fetchAllNewsPosts, // No need to pass params
    });


    if (isLoading) return newsStyleSection(<h2>Loading news posts...</h2>);
    if (error) return newsStyleSection(<h2>Error fetching news posts: {error.message}</h2>);
    if (!newsPosts) return newsStyleSection(<h2>No news posts found.</h2>);

    // Pagination logic
    const postsPerPage = 8;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = newsPosts.slice(startIndex, endIndex);
    const numOfPages = Math.ceil(newsPosts.length / postsPerPage);

    if (paginatedPosts.length === 0) {
        // Redirect to the first page if the page is out of bounds
        if (page > numOfPages) {
            window.location.href = `${pageRef}${numOfPages}`;
        } else {
            // Redirect to the first page if the page is less than 1
            window.location.href = `/news`;
        }
    }

    let carouselNav = styles.carouselNav;
    if (paginatedPosts.length <= 4) {
        carouselNav = styles.halfCardsCarouselNav;
    }
    return (
        newsStyleSection(
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
                    {/* redirect to the previous page if page is not 1 (/news?page=<page >) */}
                    <a className={styles.carouselNavBack} href={`${pageRef}${page - 1}`}>
                        <div className={styles.carouselArrow}/>
                    </a>
                    {Array.from({length: numOfPages}, (_, i) => (
                        <a key={i} className={styles.carouselNavDot} href={`${pageRef}${i + 1}`}/>
                    ))}
                    <a className={styles.carouselNavForward} href={`${pageRef}${page + 1}`}>
                        <div className={styles.carouselArrow}/>
                    </a>
                </div>
            </div>
        )
    );
}

export default NewsPageContent;