import {useParams} from "react-router-dom";
import NewsPost from "./NewsPost.tsx";

/**
 * A component that displays a news post based on the URL.
 * @constructor URLWrappedNewsPost
 */
function URLWrappedNewsPost() {
    const { id } = useParams<{ id: string }>(); // Access the `id` from the URL

    if (!id) {
        return <p>No news post id provided!</p>;
    }

    return (
        <NewsPost id={id} />
    );
}

export default URLWrappedNewsPost;