import { useQuery } from "@tanstack/react-query";
import { fetchNewsPost } from "../../scripts/newsPosts.ts";
import {NewsPostContainer} from "../../scripts/model/NewsPostContainer.tsx";


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
        <div>
            <h2>{newsPost.title}</h2>
            <img src={newsPost.thumbnail} alt={newsPost.title} />
            {newsPost.getAuthorAvatar()}
            <p>By {newsPost.author}</p>
            <p>{newsPost.formatTimestampWithOrdinal()}</p>
            <p>{newsPost.renderContent()}</p>
        </div>
    );
}

export default NewsPostContent;
