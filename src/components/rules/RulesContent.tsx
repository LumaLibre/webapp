import React from "react";
import styles from "./RulesContent.module.css";
import Navbar from "../homepage/navbar/Navbar.tsx";  // Adjust the path if needed

const rulesContent: React.FC = () => {
    return (
        <div className={styles.rulesContainer}>
            <Navbar />
            <div className={styles.rulesContent}>
                <h1>Server Rules</h1>
                <ul>
                    <li>TEST RULES</li>
                </ul>
            </div>
        </div>
    );
};

export default rulesContent;
