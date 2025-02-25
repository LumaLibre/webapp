import styles from "./LeadContent.module.css";
import groundImg from "../../../../assets/UndergroundBg.png";
import houseImg from "../../../../assets/House.png";
import crossPlatformImg from "../../../../assets/CrossplatformLuma.png";
import eventImg from "../../../../assets/EventLuma.png";

function LeadContent() {
    return (
        <section className={styles.heroSection}>
            <img src={groundImg} alt="Main Background" className={styles.heroImage} />
            <div className={styles.heroText}>
                <h1>Welcome to Luma</h1>
                <p>
                    We are a TownySMP server dedicated to delivering high-quality gameplay within
                    a vibrant and welcoming community. At Luma, you'll discover a variety of
                    entertaining and distinctive features, including custom-coded items, a
                    synchronized seasonal world reflecting real-life seasons, item wraps, mcMMO,
                    and, of course, Towny!
                </p>
                {/* Image container */}
                <div className={styles.imageContainer}>
                    <img src={crossPlatformImg} alt="Cross Platform" className={styles.smallImage} />
                    <img src={houseImg} alt="House" className={styles.smallImage} />
                    <img src={eventImg} alt="Events" className={styles.smallImage} />
                </div>
            </div>
        </section>
    );
}

export default LeadContent;
