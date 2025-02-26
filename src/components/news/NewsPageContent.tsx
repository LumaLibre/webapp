import {useQuery} from "@tanstack/react-query";
import styles from "./content/postcard/PostCard.module.css";
import PostCard from "./content/postcard/PostCard.tsx";
import {NewsPostContainer} from "../../scripts/model/NewsPostContainer.tsx";
import {fetchAllNewsPosts} from "../../scripts/newsPosts.ts";
import Navbar from "../navbar/Navbar.tsx";
import {JSX} from "react";


const newsStyleSection = (element: JSX.Element) => {
    return (
        <section className={styles.newsPageBackground}>
            <Navbar/>
            {element}
        </section>
    );
};


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

    return (
        newsStyleSection(
            <div className={styles.postList}>
                {paginatedPosts.map((post: NewsPostContainer, index: number) => (
                    <PostCard
                        newsPost={post}
                        biggerContainer={index > 4}
                        key={post.title}
                    />
                ))}
            </div>
        )
    );
}

export default NewsPageContent;