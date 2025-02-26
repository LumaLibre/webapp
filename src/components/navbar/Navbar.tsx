import { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faGavel,
    faCheckCircle,
    faStore,
    faMap,
    faBook,
    faRocket
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link for navigation

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>
                        <FontAwesomeIcon icon={faHouse} className={styles.navIcon} />
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/rules" className={styles.navLink}>
                        <FontAwesomeIcon icon={faGavel} className={styles.navIcon} />
                        Rules
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.navIcon} />
                    Vote
                </li>
                <li className={styles.navItem}>
                    <a href="https://store.lumamc.net" className={styles.navLink}>
                        <FontAwesomeIcon icon={faStore} className={styles.navIcon} />
                        Store
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://map.lumamc.net" className={styles.navLink}>
                        <FontAwesomeIcon icon={faMap} className={styles.navIcon} />
                        Map
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://wiki.lumamc.net" className={styles.navLink}>
                        <FontAwesomeIcon icon={faBook} className={styles.navIcon} />
                        Wiki
                    </a>
                </li>
                <li className={styles.navItem}>
                    <Link to="/news" className={styles.navLink}>
                        <FontAwesomeIcon icon={faRocket} className={styles.navIcon} />
                        News
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
