import {RecordedVoter} from "@/scripts/model/RecordedVoter.ts";
import styles from "./TopVoter.module.scss";
import {useQuery} from "@tanstack/react-query";

const TopVoter = ({ recordedVoter }: { recordedVoter: RecordedVoter }) =>  {
    const name = recordedVoter.name || "Unknown Voter";
    return (
        <div className={styles.topVoterContainer}>
            <img src={recordedVoter.getBodyRenderURL()} alt={name} className={styles.bodyRenderImage} />
            <div className={styles.topVoterText}>
                <h2>{name}</h2>
                <h3>{recordedVoter.votes} Votes</h3>
            </div>
        </div>
    );
};

export default TopVoter;