import React from "react";
import styles from "./App.module.css";
import Mainpage from "./sections/Mainpage/MainPage";
import SecondSection from "./sections/SecondSection/SecondSection";

function App() {
    return (
        <div className={styles.appContainer}>
            <Mainpage />
            <SecondSection />
        </div>
    );
}

export default App;
