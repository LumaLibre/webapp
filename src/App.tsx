import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import styles from "./App.module.css";
import MainPage from "./pages/MainPage.tsx";
import RulesPage from "./pages/RulesPage.tsx";
import URLWrappedNewsPost from "./components/news/URLWrappedNewsPost.tsx";


function App() {
    console.log("App.tsx");
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/rules" element={<RulesPage />} />
                <Route path="/newspost/:id" element={<URLWrappedNewsPost />} />
            </Routes>
        </div>
    );
}

export default App;
