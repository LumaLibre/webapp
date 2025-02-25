import { useQuery } from "@tanstack/react-query";
import { fetchNewsPost } from "../scripts/newsPosts.ts";
import {NewsPostContainer} from "../scripts/model/NewsPostContainer.ts";

function NewsPost({ id }: { id: string }) {

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



    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Failed to load news post</p>;
    if (!newsPost) return <p>No news post found.</p>;

    return (
        // STYLING: FOR KATARAY
        <div>
            <h2>{newsPost.title}</h2>
            <img src={newsPost.thumbnail} alt={newsPost.title} />
            <p>By {newsPost.author}</p>
            <p>{new Date(newsPost.timestamp).toLocaleString()}</p>
            <p>{newsPost.content}</p>
        </div>
    );
}

export default NewsPost;
