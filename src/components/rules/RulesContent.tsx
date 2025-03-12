import { useState } from "react";
import styles from "./RulesContent.module.scss";
import judgeLuma from "@/assets/JudgeLuma.webp";
import gavel from "@/assets/Gavel.webp"
import Label from "@/components/label/Label.tsx";

const Rules = () => {
    const [activeTab, setActiveTab] = useState("Home");


    return (
        <div className={styles.rulesBackground}>
            <Label />
            <div className={styles.rulesCardSelector}>
                <div className={styles.judgeLumaImg}>
                    <img src={judgeLuma} alt="Judge Luma" className={styles.judgeLumaImg}/>
                </div>
            </div>
            <div className={styles.rulesCard}>
                <div className={styles.gavelImg}>
                    <img src={gavel} alt="Luma Gavel" className={styles.gavelImg}/>
                </div>
            </div>
        </div>
    );
};

export default Rules;
