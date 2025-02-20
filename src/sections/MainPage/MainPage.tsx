import { useState } from "react";
import styles from "./MainPage.module.css";
import logo from "../../assets/LumaLogo.png";
import IPButton from "../../assets/IPButton.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGavel, faCheckCircle, faStore, faMap, faBook, faRocket } from '@fortawesome/free-solid-svg-icons';

function Mainpage() {
    const [isMenuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <section className={styles.heroSection}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                {/* Hamburger icon */}
                <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faHouse} className={styles.navIcon} />
                        Home
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faGavel} className={styles.navIcon} />
                        Rules
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.navIcon} />
                        Vote
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faStore} className={styles.navIcon} />
                        Store
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faMap} className={styles.navIcon} />
                        Map
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faBook} className={styles.navIcon} />
                        Wiki
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon icon={faRocket} className={styles.navIcon} />
                        News
                    </li>
                </ul>
            </nav>

            <section className={styles.logoSection}>
                <img src={logo} alt="Luma Logo" className={`${styles.logoImage} ${styles.imageHover}`} />
            </section>

            <section className={styles.IPButtonSection}>
                <div className={styles.IPButtonContainer}>
                    <img src={IPButton} alt="IP Button" className={`${styles.IPButtonImg} ${styles.imageHover}`} />
                    <p className={styles.IPText}>play.lumamc.net</p>
                </div>
            </section>
        </section>
    );
}

export default Mainpage;
