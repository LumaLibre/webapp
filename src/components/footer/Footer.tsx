import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerSection}>
                <h3>LumaMC</h3>
                <p>LumaMC is a TownySMP focused on quality gameplay with a small and friendly community!</p>
                <button className={styles.footerButton}>play.lumamc.net</button>
            </div>

            <div className={styles.footerSection}>
                <h3>Links</h3>
                <p>blahblah</p>
                <p>blahblah</p>
                <p>blahblah</p>
            </div>
        </div>
    );
}

export default Footer;