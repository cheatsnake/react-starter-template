import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import "./styles/App.scss";

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="test" element={<TestPage />} />
            </Routes>
        </div>
    );
}

export default App;
