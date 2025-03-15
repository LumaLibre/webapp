import styles from "./Header.module.scss";
import logo from "@/assets/LumaText.webp";
import ipButton from "@/assets/Button.webp";
import {LUMA_IP_ADDRESS} from "@/constants.ts";

function Header() {
    return (
        <section className={styles.headerBackground}>

            <div className={styles.logoSection}>
                <img src={logo} alt="Luma Logo" className={styles.logoImage} />
            </div>

            <div className={styles.IPButtonSection}>
                <div className={styles.IPButtonContainer}>
                    <img src={ipButton} alt="IP Button" className={styles.IPButtonImg} />
                    <h1 className={styles.IPText}>{LUMA_IP_ADDRESS}</h1>
                </div>
            </div>
        </section>
    );
}

export default Header;