import { useQuery } from "@tanstack/react-query";
import { fetchNewsPost } from "../../scripts/newsPosts.ts";
import {NewsPostContainer} from "../../scripts/model/NewsPostContainer.tsx";
import styles from "./NewsPostContent.module.css";
import Navbar from "../navbar/Navbar.tsx";


/**
 * NewsPostContent component, displays a single news post in a page.
 * @param id The id of the news post to display.
 * @constructor NewsPostContent
 */
function NewsPostContent({ id }: { id: string }) {

    const {
        data: newsPost,
        isLoading,
        error,
    } = useQuery<NewsPostContainer>({
        queryKey: [id, id],
        queryFn: ({ queryKey }) => {
            const [, postId] = queryKey as [string, string]; // Cast queryKey to a tuple
            return fetchNewsPost(postId);
        },
    });


    // these also need styling
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Failed to load news post</p>;
    if (!newsPost) return <p>No news post found.</p>;

    return (
        // STYLING: FOR KATARAY
        <section className={styles.newsPostBackground}>
            <Navbar/>
            <div className={styles.articleCard}>
                <img src={newsPost.thumbnail} alt={newsPost.title} className={styles.articleImage}/>
                <div className={styles.articleCardText}>
                    <h1>{newsPost.title}</h1>
                    <div className={styles.articleAuthorContainer}>
                        <img src={newsPost.getAuthorAvatarURL()} alt={newsPost.author} className={styles.articleAuthorImageContainer}/>
                        By {newsPost.author} • On {newsPost.formatTimestampWithOrdinal()}
                    </div>
                    {newsPost.renderContent()}
                </div>
            </div>
        </section>
    );
}

export default NewsPostContent;
