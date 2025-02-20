import styles from "./MainPage.module.css";
import logo from "../../assets/LumaLogo.png";
import IPButton from "../../assets/IPButton.png";

function Mainpage() {
    return (
        <section className={styles.heroSection}>
            <section className={styles.logoSection}>
                <img src={logo} alt="Luma Logo" className={`${styles.logoImage}`} />
            </section>

            <section className={styles.IPButtonSection}>
                <div className={styles.IPButtonContainer}>
                    <img src={IPButton} alt="IP Button" className={`${styles.IPButtonImg}`} />
                    <p className={styles.IPText}>play.lumamc.net</p>
                </div>
            </section>
        </section>
    );
}
export default Mainpage;
