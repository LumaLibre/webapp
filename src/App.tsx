import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import MainPage from "./pages/MainPage.tsx";
import RulesPage from "./pages/RulesPage.tsx";
import NewsPostPage from "./pages/NewsPostPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import VotePage from "@/pages/VotePage.tsx";
import {useEffect} from "react";
import PrivacyPage from "@/pages/PrivacyPage.tsx";
import TermsPage from "@/pages/TermsPage.tsx";
import Unknown404Page from "@/pages/Unknown404Page.tsx";


export const setTitle = (title: string) => {
    useEffect(() => {
        document.title = `${title} • LumaMC`;
    }, [title]);
};

// In the future, I'd like to have the webserver deliver each page separately.
// For now, this is fine, but in the future, we should have a server-side rendering solution.
function App() {
    return (
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/rules" element={<RulesPage />} />
                <Route path="/vote" element={<VotePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:id" element={<NewsPostPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<Unknown404Page />} />
            </Routes>
        </div>
    );
}

export default App;
