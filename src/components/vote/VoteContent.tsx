import styles from "./VoteContent.module.scss";
import VoteLinkButton from "@/components/vote/components/votelink/VoteLinkButton.tsx";
import Label from "@/components/label/Label.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchTopVotersList} from "@/scripts/topVoters.ts";
import {RecordedVoter} from "@/scripts/model/RecordedVoter.ts";
import TopVoter from "@/components/vote/components/topvoter/TopVoter.tsx";


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

const TopVoters = () => {
    const { data: topVoterList, isLoading, isError } = useQuery<RecordedVoter[]>({
        queryKey: ["topVoters"],
        queryFn: () => fetchTopVotersList(1, 3)
    });

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error fetching top voters</h1>;

    return (
        <div className={styles.topVotersContainer}>
            {topVoterList?.map((topVoter) => (
                <TopVoter key={topVoter.uuid} recordedVoter={topVoter} />
            ))}
        </div>
    );
};

function VoteContent() {

    return (
        <div className={styles.background}>
            <Label />
            <div className={styles.voteLinksCard}>
                <div className={styles.voteLinksCardText}>
                    <h1>Vote for Luma!</h1>
                </div>

                <div className={styles.voteLinksCardButtonsContainer}>
                    {voteSites.map((site, index) => (
                        <VoteLinkButton key={index} href={site} label={`Vote Link #${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VoteContent;