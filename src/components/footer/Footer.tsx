import styles from "./Footer.module.scss"
import lumaLogo from "@/assets/LogoSmall.webp"
import {useQuery} from "@tanstack/react-query";
import {fetchServerStatus} from "@/scripts/serverStatuses.ts";
import {DATE, LUMA_IP_ADDRESS} from "@/constants.ts";
import sourceCodeLuma from "@/assets/lumas/BlackLumaAlert.webp";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const currentYear = DATE.getFullYear();
    let { data: rawStatus, isLoading, isError } = useQuery<string>({
        queryKey: ["mcServerStatus"],
        queryFn: fetchServerStatus,
    });
    const snapshotLoading = isLoading || isError || !rawStatus;
    rawStatus = snapshotLoading ? "Loading..." : rawStatus;

    const statusText = snapshotLoading ? rawStatus : `Join ${rawStatus}!`;

    const [hoverText, setHoverText] = useState(statusText);
    useEffect(() => {
        setHoverText(statusText);
    }, [statusText]);

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerTopContainer}>
                <div className={styles.footerTopItems}>
                    <img src={lumaLogo} alt="Luma Logo" className={styles.logoSmall}/>
                    <div className={styles.serverCount}
                         onMouseEnter={() => setHoverText("Click to copy!")}
                         onMouseLeave={() => setHoverText(statusText)}
                         onClick={() => {
                             navigator.clipboard.writeText(LUMA_IP_ADDRESS);
                             setHoverText("Copied, see you there!");
                         }}
                    >
                        <h4>{LUMA_IP_ADDRESS}</h4>
                        <h5>{hoverText}</h5>
                    </div>
                </div>
                <div className={styles.footerTopSocialLinksContainer}>
                    <FontAwesomeIcon icon={faDiscord} className={styles.footerTopSocialLink} />
                </div>
            </div>
            <div className={styles.footerBottomContainer}>
                <div className={styles.footerBottomTextContainer}>
                <h3>© {currentYear} LumaMC. All rights reserved.</h3>
                    <p>We are not affiliated with Mojang AB.</p>
                </div>
                <div className={styles.footerBottomItems}>
                    <a href="https://github.com/LumaLibre/web" target="_blank" rel="noopener noreferrer">
                        <img src={sourceCodeLuma} alt="Luma Logo" className={styles.sourceCodeLuma}/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;