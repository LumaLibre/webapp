import styles from "./PostCard.module.css";
import {NewsPostContainer} from "../../../../scripts/model/NewsPostContainer.tsx";
import {useNavigate} from "react-router-dom";


function NewsPost({ newsPost, biggerContainer }: { newsPost: NewsPostContainer, biggerContainer: boolean }) {
    let container: string  = styles.container;
    if (biggerContainer) {
        container = styles.biggerContainer;
    }

    const navigate = useNavigate();

    return (
        <div
            className={styles.postCard}
            onClick={() => navigate(`/news/${newsPost.id}`)}
            style={{cursor: "pointer"}}
        >
            <img src={newsPost.thumbnail} alt={newsPost.title} width={300} height={175}/>
            <div className={container}>
                {/*<div style={{display: "flex", alignItems: "center", gap: "8px"}}>*/}
                {/*    */}
                {/*</div>*/}
                <h2>{newsPost.getAuthorAvatar()} • {newsPost.title}</h2>
                {newsPost.renderContentSmall()}
            </div>
        </div>
    )
}

export default NewsPost;