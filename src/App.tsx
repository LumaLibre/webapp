import React from "react";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./App.module.css";
import Mainpage from "./sections/Mainpage/MainPage";
import SecondSection from "./sections/SecondSection/SecondSection";
import ThirdSection from "./sections/ThirdSection/ThirdSection.tsx";

function App() {
    return (
        <div className={styles.appContainer}>
            <Mainpage />
            <SecondSection />
            <ThirdSection/>
        </div>
    );
}

export default App;
