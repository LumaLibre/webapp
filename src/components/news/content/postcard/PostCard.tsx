import styles from "./PostCard.module.scss";
import {NewsPostContainer} from "../../../../scripts/model/NewsPostContainer.tsx";
import {useNavigate} from "react-router-dom";


function NewsPost({ newsPost, biggerContainer }: { newsPost: NewsPostContainer, biggerContainer: boolean}) {
    const container = !biggerContainer ? styles.container : styles.biggerContainer;
    const navigate = useNavigate();

    return (
        <div className={styles.postCard} onClick={() => navigate(`/news/${newsPost.id}`)}>
            <img src={newsPost.thumbnail} alt={newsPost.title} width={300} height={175}/>
            <div className={container}>
                <h3>{newsPost.getAuthorAvatar()} • {newsPost.title}</h3>
                {newsPost.renderContentSmall()}
            </div>
        </div>
    )
}

export default NewsPost;