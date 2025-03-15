import { useState } from "react";
import styles from "./RulesContent.module.scss";
import judgeLuma from "@/assets/JudgeLuma.webp";
import gavel from "@/assets/Gavel.webp"
import Label from "@/components/label/Label.tsx";
import OverviewRules from "@/components/rules/content/OverviewRules.tsx";
import ConductRules from "@/components/rules/content/ConductRules.tsx";
import StoreRules from "@/components/rules/content/StoreRules.tsx";
import GameplayRules from "@/components/rules/content/GameplayRules.tsx";
import PoliciesRules from "@/components/rules/content/PoliciesRules.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFlag, faComments, faStore, faGamepad, faClipboardList} from "@fortawesome/free-solid-svg-icons";


export const quickLink = (text: string, link: string) => {
    return (
        <a href={link} target="_blank">{text}</a>
    );
};


const tabs = [
    {name: "Overview", component: <OverviewRules/>, icon: faFlag},
    {name: "Conduct", component: <ConductRules/>, icon: faComments},
    {name: "Store", component: <StoreRules/>, icon: faStore},
    {name: "Gameplay", component: <GameplayRules/>, icon: faGamepad},
    {name: "Policies", component: <PoliciesRules/>, icon: faClipboardList}
];

function Rules() {
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <div className={styles.rulesBackground}>
            <Label/>

            <img src={judgeLuma} alt="Judge Luma" className={styles.judgeLumaImg}/>
            <img src={gavel} alt="Luma Gavel" className={styles.gavelImg}/>

            <div className={styles.rulesCardSelector}>
                <div className={styles.rulesTextStyles}>
                    <h1 className={styles.rulesCardSelectorTitle}>
                        Rules
                    </h1>
                    {tabs.map((tab) => (
                        <a
                            className={styles.rulesCardSelectorNavItem}
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            <FontAwesomeIcon icon={tab.icon} className={styles.iconSmall} />
                            <h2 className={styles.inlineText}>{tab.name}</h2>
                        </a>
                    ))}
                </div>
            </div>

            <div className={styles.rulesCard}>
                <div className={styles.rulesTextStyles}>
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={`${styles.rulesTransition} ${activeTab === tab.name ? styles.active : ""}`}
                        >
                            {activeTab === tab.name && tab.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Rules;
