import React from "react";
import styles from "./App.module.css";
import Mainpage from "./pages/Mainpage/MainPage";


function App() {
    return (
        <div>
            <div className={styles.appContainer}>
                <Mainpage />
            </div>
        </div>
    );
}

export default App;
