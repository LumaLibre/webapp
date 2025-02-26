import styles from "./SecondaryContent.module.css";
import spaceImg from "../../../../assets/SpaceBg.png";


function SecondSection() {
    return (
        <section className={styles.heroSection}>
            <img src={spaceImg} alt="Main Background" className={styles.heroImage}/>
        </section>
    );
}

export default SecondSection;
