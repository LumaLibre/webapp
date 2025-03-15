import styles from "./Header.module.scss";
import logo from "@/assets/LumaText.webp";
import ipButton from "@/assets/Button.webp";

function Header() {
    return (
        <section className={styles.headerBackground}>

            <section className={styles.logoSection}>
                <img src={logo} alt="Luma Logo" className={styles.logoImage} />
            </section>

            <section className={styles.IPButtonSection}>
                <div className={styles.IPButtonContainer}>
                    <img src={ipButton} alt="IP Button" className={styles.IPButtonImg} />
                    <p className={styles.IPText}>play.lumamc.net</p>
                </div>
            </section>
        </section>
    );
}

export default Header;