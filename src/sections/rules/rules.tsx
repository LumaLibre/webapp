import React from "react";
import styles from "./rules.module.css";
import Navbar from "../navbar/navbar.tsx";  // Adjust the path if needed

const rules: React.FC = () => {
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

export default rules;
