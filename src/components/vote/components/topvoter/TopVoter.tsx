import {RecordedVoter} from "@/scripts/model/RecordedVoter.ts";
import styles from "./TopVoter.module.scss";

const TopVoter = ({ recordedVoter, index }: { recordedVoter: RecordedVoter, index: number }) =>  {
    const name = recordedVoter.name || "Voter";
    const votes = recordedVoter.votes;
    return (
        <div className={styles.topVoterContainer}>
            <div className={styles.bodyRenderContainer}>
                <img src={recordedVoter.getBodyRenderURL()} alt={name} className={styles.bodyRenderImage} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.textStyling}>
                    <h5>#{index}<br/>{name}</h5>
                    <h4>{votes} Votes</h4>
                </div>
            </div>
        </div>
    );
};

export default TopVoter;