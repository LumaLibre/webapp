import styles from "./ThirdSection.module.css";
import groundImg from "../../assets/SpaceBg.png";


function SecondSection() {
    return (
        <section className={styles.heroSection}>
            <img src={groundImg} alt="Main Background" className={styles.heroImage}/>
        </section>
    );
}

export default SecondSection;
