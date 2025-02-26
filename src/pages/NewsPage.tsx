import {useSearchParams} from "react-router-dom";
import NewsPageContent from "../components/news/NewsPageContent.tsx";


function NewsPage() {
    const [searchParams] = useSearchParams();
    // Default to page 1 if not provided
    const page = parseInt(searchParams.get("page") || "1", 10);

    return (
        <NewsPageContent page={page} />
    );
}

export default NewsPage;