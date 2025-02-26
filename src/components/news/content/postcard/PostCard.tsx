import styles from "./PostCard.module.css";
import {NewsPostContainer} from "../../../../scripts/model/NewsPostContainer.tsx";


function NewsPost({ newsPost, biggerContainer }: { newsPost: NewsPostContainer, biggerContainer: boolean }) {
    let container: string  = styles.container;
    if (biggerContainer) {
        container = styles.biggerContainer;
    }
    return (
        <div className={styles.postCard}>
            <img src={newsPost.thumbnail} alt={newsPost.title} width={300} height={175}/>
            <div className={container}>
                <h2>{newsPost.title}</h2>
                {newsPost.renderContentSmall()}
            </div>
        </div>
    )
}

export default NewsPost;