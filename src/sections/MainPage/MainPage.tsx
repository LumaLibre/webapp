import styles from "./MainPage.module.css";
import logo from "../../assets/LumaLogo.png";
import IPButton from "../../assets/IPButton.png";
import SecondSection from "../SecondSection/SecondSection.tsx";
import ThirdSection from "../ThirdSection/ThirdSection.tsx";

function Mainpage() {
    return (
        <>
            <section className={styles.heroSection}>
                <section className={styles.logoSection}>
                    <img src={logo} alt="Luma Logo" className={`${styles.logoImage} ${styles.imageHover}`}/>
                </section>

                <section className={styles.IPButtonSection}>
                    <img src={IPButton} alt="IP Button" className={`${styles.IPButtonImg} ${styles.imageHover}`}/>
                </section>
            </section>
            <SecondSection/>
            <ThirdSection/>
        </>
    );
}
export default Mainpage;
