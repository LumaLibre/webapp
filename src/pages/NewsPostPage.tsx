import {useParams} from "react-router-dom";
import NewsPostContent from "../components/news/NewsPostContent.tsx";

/**
 * A component that displays a news post based on the URL.
 * @constructor NewsPostPage
 */
function NewsPostPage() {
    const { id } = useParams<{ id: string }>(); // Access the `id` from the URL

    if (!id) {
        return <p>No news post id provided!</p>;
    }

    return (
        <NewsPostContent id={id} />
    );
}

export default NewsPostPage;