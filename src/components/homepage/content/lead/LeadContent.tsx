import styles from "./LeadContent.module.css";
import groundImg from "@/assets/UndergroundBg.png";
import houseImg from "@/assets/House.png";
import crossPlatformImg from "@/assets/CrossplatformLuma.png";
import eventImg from "@/assets/EventLuma.png";

function LeadContent() {
    return (
        <section className={styles.heroSection}>
            <img src={groundImg} alt="Main Background" className={styles.heroImage} />
            <div className={styles.heroText}>
                <h1>Welcome to Luma</h1>
                <p>
                    We're a TownySMP server focused on high-quality gameplay and a vibrant,
                    welcoming community. Join us to enjoy unique features like custom items,
                    a seasonal world, item wraps, mcMMO, and Towny!
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
