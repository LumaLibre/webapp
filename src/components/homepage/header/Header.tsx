import styles from "./Header.module.scss";
import logo from "@/assets/LumaText.webp";
import newLogo from "@/assets/LumaLogoBig.png";
import welcomeText from "@/assets/LumaText.png";
import ipButton from "@/assets/Button.webp";
import {LUMA_IP_ADDRESS} from "@/constants.ts";
import littleLuma from "@/assets/lumas/BreweryLuma.webp";

function Header() {
    return (
        <section className={styles.headerBackground}>

            <div className={styles.welcomeText}>
                <h1>Welcome To</h1>
                <h1>Luma</h1>
            </div>

            <img src={newLogo} alt="Luma Logo" className={styles.newLogo}/>
            {/*<img src={logo} alt="Luma Logo" className={styles.logoWelcomeImage}/>*/}
            <img src={littleLuma} alt="Luma Logo" className={styles.littleLumaIcon}/>
            {/*<img src={welcomeText} alt="Welcome Text" className={styles.lumaTextWelcome}/>*/}

            <div className={styles.descriptionContainer}>
                We're a TownySMP server focused on high-quality gameplay and a vibrant,
                welcoming community. Join us to enjoy unique features like custom items,
                a seasonal world, item wraps, mcMMO, and Towny!
            </div>

            {/*<div className={styles.logoSection}>*/}
            {/*    <img src={logo} alt="Luma Logo" className={styles.logoImage} />*/}
            {/*</div>*/}

            {/*<div className={styles.IPButtonSection}>*/}
            {/*    <div className={styles.IPButtonContainer}>*/}
            {/*        <img src={ipButton} alt="IP Button" className={styles.IPButtonImg} />*/}
            {/*        <h1 className={styles.IPText}>{LUMA_IP_ADDRESS}</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
}

export default Header;