import Home from './components/pages/Home';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import './styles/App.css';
import Login from './components/pages/Login';
import Privacidade from "./components/pages/Privacidade";
import {useEffect, useState} from "react";
import LoadingPage from "./components/pages/LoadingPage";
import Registro from './components/pages/Registro';
import CriarSenha from "./components/pages/CriarSenha";

function usePageLoading() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    return loading;
}

function AppContent() {
    const loading = usePageLoading();

    return (
        <>
            {loading ? (
                <LoadingPage />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registre-se" element={<Registro />} />
                    <Route path="/criar-senha" element={<CriarSenha />} />
                    <Route path="/politica-de-privacidade" element={<Privacidade />} />
                </Routes>
            )}

        </>
    );
}

function App() {
    return (
        <>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </>
    );
}

export default App;
