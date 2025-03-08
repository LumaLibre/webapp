import styles from "./Header.module.css";
// import Navbar from "../../navbar/Navbar.tsx";
import logo from "../../../assets/LumaLogo.png";
import ipButton from "../../../assets/IPButton.png";

function Header() {
    return (
        <section className={styles.heroSection}>

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