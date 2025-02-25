import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import styles from "./App.module.css";
import MainPage from "./pages/MainPage.tsx";
import RulesPage from "./pages/RulesPage.tsx";



function App() {
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/rules" element={<RulesPage />} />
            </Routes>
        </div>
    );
}

export default App;
