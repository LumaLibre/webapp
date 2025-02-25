import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import styles from "./App.module.css";
import MainPage from "./pages/MainPage.tsx";
import RulesPage from "./pages/RulesPage.tsx";
import NewsPost from "./components/NewsPost.tsx";


function App() {
    console.log("App.tsx");
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/rules" element={<RulesPage />} />
                {/* redirect to discord */}
                <Route path="/chat" element={
                    <NewsPost id={"article-title"} />
                }
                />
            </Routes>
        </div>
    );
}

export default App;
