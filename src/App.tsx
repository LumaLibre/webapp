import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import MainPage from "./pages/MainPage.tsx";
import RulesPage from "./pages/RulesPage.tsx";
import NewsPostPage from "./pages/NewsPostPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";


function App() {
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/rules" element={<RulesPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<NewsPostPage />} />
            </Routes>
        </div>
    );
}

export default App;
