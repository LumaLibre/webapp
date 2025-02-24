import styles from "./LeadContent.module.css";
import groundImg from "../../../../assets/UndergroundBg.png";


function LeadContent() {
    return (
        <section className={styles.heroSection}>
            <img src={groundImg} alt="Main Background" className={styles.heroImage}/>
        </section>
    );
}

export default LeadContent;
