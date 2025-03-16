import {RecordedVoter} from "@/scripts/model/RecordedVoter.ts";
import styles from "./TopVoter.module.scss";

const TopVoter = ({ recordedVoter }: { recordedVoter: RecordedVoter }) =>  {
    const name = recordedVoter.name || "Voter";
    return (
        <div className={styles.topVoterContainer}>
            <div className={styles.bodyRenderContainer}>
                <img src={recordedVoter.getBodyRenderURL()} alt={name} className={styles.bodyRenderImage} />
            </div>
            <div className={styles.textContainer}>
                <h3>
                    <span className={styles.textStyle1}>{name} • </span>
                    <span className={styles.textStyle2}>{recordedVoter.votes} Votes</span>
                </h3>
            </div>
        </div>
    );
};

export default TopVoter;