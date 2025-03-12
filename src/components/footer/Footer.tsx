import styles from "./Footer.module.scss"
import lumaLogo from "@/assets/favicon.png"
import {useQuery} from "@tanstack/react-query";
import {fetchServerStatus} from "@/scripts/serverStatuses.ts";

function Footer() {
    const currentYear = new Date().getFullYear();
    let {data: mcStatus, isLoading: mcStatusIsLoading, isError: mcStatusError} = useQuery<string>({
        queryKey: ["mcServerStatus"],
        queryFn: fetchServerStatus,
    });
    if (mcStatusIsLoading || mcStatusError || !mcStatus) {
        mcStatus = 'Loading...';
    }

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={styles.footerTopItemsLeft}>
                    <img src={lumaLogo} alt="Luma Logo" className={styles.logoSmall}/>
                    <div className={styles.serverCount}>
                        <h4>play.lumamc.net</h4>
                        <h5>Join {mcStatus}!</h5>
                    </div>
                    <div className={styles.footerTopSocialLinks}>
                        <i className="fa-brands fa-discord"></i>
                    </div>
                </div>
                <div className={styles.footerTopSocialLinks}>

                </div>
            </div>
            <div className={styles.footerBottomContainer}>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottomTextContainer}>
                        <h3>© {currentYear} LumaMC. All rights reserved.</h3>
                        <p>We are not affiliated with Mojang AB.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;