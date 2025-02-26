import styles from "./PostCard.module.css";
import {NewsPostContainer} from "../../../../scripts/model/NewsPostContainer.tsx";


function NewsPost({ newsPost }: { newsPost: NewsPostContainer }) {
    return (
        <div className={styles.postCard}>
            <img src={newsPost.thumbnail} alt={newsPost.title} width={300} height={175}/>
            <div className={styles.container}>
                <h4>{newsPost.title}</h4>
                {newsPost.renderContentSmall()}
                {/*<p>*/}
                {/*    lorem ipsum dolor sit amet habibi*/}
                {/*    <br/>*/}
                {/*    got them fire bombs i know you want*/}
                {/*    <br/>*/}
                {/*    blah blah blah random text*/}
                {/*    <br/>*/}
                {/*    blow this place up im a firebomber*/}
                {/*    <br/>*/}
                {/*    booyah hah hah hah hah hah ha*/}
                {/*</p>*/}
            </div>
        </div>
    )
}

export default NewsPost;