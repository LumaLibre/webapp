import {fetchDiscordStatus, fetchServerStatus} from "@/scripts/serverStatuses.ts";
import {LUMA_DISCORD_INV_SHORT, LUMA_IP_ADDRESS} from "@/constants.ts";
import {useState} from "react";
import logo from "@/assets/LumaLogo.png";
import styles from "./Label.module.scss";
import playBtn from "@/assets/PlayBtn.webp";
import discordBtn from "@/assets/DiscordBtn.webp";
import {useQuery} from "@tanstack/react-query";

const Label = () => {
    // querying
    let {data: mcStatus, isLoading: mcStatusIsLoading, isError: mcStatusError} = useQuery<string>({
        queryKey: ["mcServerStatus"],
        queryFn: fetchServerStatus,
    });
    let {data: discordStatus, isLoading: discordStatusIsLoading, isError: discordStatusError} = useQuery<string>({
        queryKey: ["discordServerStatus"],
        queryFn: fetchDiscordStatus,
    });
    if (mcStatusIsLoading || mcStatusError || !mcStatus) {
        mcStatus = 'Loading...';
    }
    if (discordStatusIsLoading || discordStatusError || !discordStatus) {
        discordStatus = 'Loading...'
    }

    const [mcHoverText, mcSetHoverText] = useState(LUMA_IP_ADDRESS);
    const [discordHoverText, discordSetHoverText] = useState(LUMA_DISCORD_INV_SHORT);

    return (
        <>
            <img src={logo} alt="Luma Logo" className={styles.logoImage}/>

            <div className={styles.playBtnContainer}>
                <div className={styles.playBtnImg}
                     onMouseEnter={() => mcSetHoverText("Click to copy IP!")}
                     onMouseLeave={() => mcSetHoverText(LUMA_IP_ADDRESS)}
                     onClick={() => {
                         navigator.clipboard.writeText(LUMA_IP_ADDRESS);
                         mcSetHoverText("Copied, see you there!");
                     }}
                >
                    <img src={playBtn} alt="Play Button"/>
                    <h2>{mcStatus}</h2>
                    <h3>{mcHoverText}</h3>
                </div>
            </div>
            <div className={styles.discordBtnContainer}>
                <div className={styles.discordBtnImg}
                     onMouseEnter={() => discordSetHoverText("Click to join!")}
                     onMouseLeave={() => discordSetHoverText(LUMA_DISCORD_INV_SHORT)}
                     onClick={() => {
                         window.open(`https://${LUMA_DISCORD_INV_SHORT}`, "_blank");
                         discordSetHoverText("Woo, see you there!");
                     }}
                >
                    <img src={discordBtn} alt="Discord Button"/>
                    <h2>{discordStatus}</h2>
                    <h3>{discordHoverText}</h3>
                </div>
            </div>
        </>
    );
};

export default Label;