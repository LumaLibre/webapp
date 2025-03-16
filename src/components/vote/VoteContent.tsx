import styles from "./VoteContent.module.scss";
import VoteLinkButton from "@/components/vote/components/votelink/VoteLinkButton.tsx";
import Label from "@/components/label/Label.tsx";
import TopVoters from "@/components/vote/components/topvoter/TopVoters.tsx";

const voteSites: string[] = [
    'https://minecraftservers.org/vote/658337',
    'https://minecraft-server-list.com/server/501583/vote',
    'https://minecraft.buzz/vote/9490',
    'https://topg.org/minecraft-servers/server-659987',
    'https://topminecraftservers.org/vote/36236',
    'https://minecraft-mp.com/server/327658/vote',
    'https://play-minecraft-servers.com/minecraft-servers/lumamc/?tab=vote',
    'https://minecraft-server.net/details/LumaMC',
    'https://minecraft-serverlist.com/server/2063/vote',
    'https://www.curseforge.com/servers/minecraft/game/lumamc/vote'
];

function VoteContent() {
    const month = new Date().toLocaleString('en-US', { month: 'long' });

    return (
        <div className={styles.background}>
            <Label />
            <div className={styles.voteLinksCard}>
                <div className={styles.cardText}>
                    <h1>Vote for Luma!</h1>
                </div>

                <div className={styles.voteLinksCardButtonsContainer}>
                    {voteSites.map((site, index) => (
                        <VoteLinkButton key={index} href={site} label={`Vote Link #${index + 1}`} />
                    ))}
                </div>
            </div>
            <div className={styles.topVotersCard}>
                <div className={styles.cardText}>
                    <h2>Top voters for {month}</h2>
                </div>
                <div className={styles.topVotersContainer}>
                    <TopVoters from={1} to={3}  />
                </div>
            </div>
        </div>
    );
}

export default VoteContent;