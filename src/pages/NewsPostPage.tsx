import {useParams} from "react-router-dom";
import NewsPostPageContent from "../components/news/NewsPostPageContent.tsx";

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
        <NewsPostPageContent id={id} />
    );
}

export default NewsPostPage;