import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./App.module.css";
import Mainpage from "./sections/Mainpage/MainPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className={styles.appContainer}>
                        <Mainpage />
                    </div>
                }/>
            </Routes>
        </Router>
    );
}

export default App;
