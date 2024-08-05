import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cookies from "js-cookie";

export default function CanvasCookies({ show, handleClose }) {
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        functionality: false
    });
    const [showCookies, setShowCookies] = useState(false);


    useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        if (!consent) {
            setTimeout(() => {
                setShowCookies(true);
            }, 4000);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookieConsent", "accepted", { expires: 365 });
        setShowCookies(false);
    };

    const rejectCookies = () => {
        Cookies.set("cookieConsent", "rejected", { expires: 365 });
        setShowCookies(false);

        for (let key in preferences) {
            if (key !== "necessary") {
                Cookies.remove(key);
            }
        }
    };

    const saveCookiesSettings = () => {
        for (let key in preferences) {
            if (preferences[key]) {
                Cookies.set(key, "true", { expires: 365 });
            } else {
                Cookies.remove(key);
            }
        }

        Cookies.set("cookieConsent", "custom", { expires: 365 });
        setShowSettings(false);
        setShowCookies(false);
    };

    const handlePreferenceChange = (type) => {
        setPreferences({
            ...preferences,
            [type]: !preferences[type]
        });
    };

    return (
        <>
            <Offcanvas id="canvas" show={showCookies} onHide={setShowCookies} placement="bottom" backdrop={false} className="d-flex">
                <Offcanvas.Body className="d-flex align-items-center">
                    <Row>
                        <Col id="text-cookies" lg={6}>
                            Usamos cookies para melhorar sua experiência e analisar nosso tráfego. Ao clicar em "Aceitar todos", você concorda com nosso uso de cookies. Para saber mais ou gerenciar suas preferências, clique em "Configurações de Cookies". 
                            <a id="privacity" href="">Política de Privacidade</a>
                        </Col>
                        <Col id="buttons-cookies" lg={6} className="d-flex justify-content-center align-items-center">
                            <button className="config" onClick={acceptCookies}>Configurações de Cookies</button>
                            <button className="button-cookies" onClick={rejectCookies}>Rejeitar todos</button>
                            <button className="button-cookies" onClick={() => setShowSettings(true)}>Aceitar todos</button>
                        </Col>
                    </Row>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}