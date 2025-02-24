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
                {/* Define the main route that includes all three sections */}
                <Route
                    path="/"
                    element={
                        <>
                            <Mainpage />
                            <SecondSection />
                            <ThirdSection />
                        </>
                    }
                />
                <Route path="/rules" element={<RulesPage />} />
                {/* You can add other routes as needed */}
            </Routes>
        </div>
    );
}

export default App;
