import { useState } from "react";
import styles from "./rules.module.css";
import { FaHome, FaUserShield, FaShoppingCart, FaGamepad, FaClipboardList } from "react-icons/fa";
import Navbar from "../navbar/navbar.tsx"; // Keep the correct path

const Rules = () => {
    const [activeTab, setActiveTab] = useState("Home");

    return (
        <div>
            <Navbar /> {/* Ensure navbar is there */}
            <div className={styles.rulesBG}>
                <div className={styles.rulesContainer}>
                    {/* Sidebar (Restored Original Look) */}
                    <div className={styles.rulesSidebar}>
                        <h2>Rules</h2>
                        <ul>
                            <li className={activeTab === "Home" ? styles.active : ""} onClick={() => setActiveTab("Home")}>
                                <FaHome /> Home
                            </li>
                            <li className={activeTab === "Conduct" ? styles.active : ""} onClick={() => setActiveTab("Conduct")}>
                                <FaUserShield /> Conduct
                            </li>
                            <li className={activeTab === "Store" ? styles.active : ""} onClick={() => setActiveTab("Store")}>
                                <FaShoppingCart /> Store
                            </li>
                            <li className={activeTab === "Gameplay" ? styles.active : ""} onClick={() => setActiveTab("Gameplay")}>
                                <FaGamepad /> Gameplay
                            </li>
                            <li className={activeTab === "Policies" ? styles.active : ""} onClick={() => setActiveTab("Policies")}>
                                <FaClipboardList /> Policies
                            </li>
                        </ul>
                    </div>

                    {/* Rules Content (Restored Original Look) */}
                    <div className={styles.rulesContent}>
                        <h1>LumaMC's Rules</h1>
                        <p><strong>Here are Luma's rules! Players are encouraged to read and stay up-to-date with our rules to avoid any issues within gameplay or communication between players!</strong></p>
                        <p><strong>Please be aware,</strong></p>
                        <p>These rules are subject to change at any time...</p>
                        <p>Again, players and community members are encouraged to stay informed about any updates...</p>
                        <h2>Punishment Policy</h2>
                        <p>Punishments are handled on a case-by-case basis...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;
