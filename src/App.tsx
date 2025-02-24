import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import styles from "./App.module.css";
import Mainpage from "./sections/homepage/MainPage/MainPage";
import SecondSection from "./sections/homepage/SecondSection/SecondSection";
import ThirdSection from "./sections/homepage/ThirdSection/ThirdSection";
import RulesPage from "./sections/rules/rules.tsx"; // Import RulesPage

function App() {
    return (
        <div className={styles.appContainer}>
            <Routes>
                {/* Define routes here */}
                <Route path="/" element={<Mainpage />} />
                <Route path="/rules" element={<RulesPage />} />
                {/* You can add other routes as needed */}
                <Route path="/second" element={<SecondSection />} />
                <Route path="/third" element={<ThirdSection />} />
            </Routes>
        </div>
    );
}

export default App;
