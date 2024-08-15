import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";

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
                            <Link id="privacity" to={"/politica-de-privacidade"}>Política de Privacidade</Link>
                        </Col>
                        <Col id="buttons-cookies" lg={6} className="d-flex justify-content-center align-items-center">
                            <button className="config" onClick={setShowSettings}>Configurações de Cookies</button>
                            <button className="button-cookies" onClick={rejectCookies}>Rejeitar todos</button>
                            <button className="button-cookies" onClick={acceptCookies}>Aceitar todos</button>
                        </Col>
                    </Row>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                </Offcanvas.Body>
            </Offcanvas>

            <Modal
                id="modal-cookies"
                show={showSettings}
                onHide={setShowSettings}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header id="header-cookies" closeButton>
                    <img id="logo-cookies" src="logo.png" alt="logo" />
                    <Modal.Title>Configurações de Cookies</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        A sua privacidade
                        <p>Quando visita um website, este pode armazenar ou recolher informações no seu navegador, principalmente na forma de cookies. Esta informação pode ser sobre si, as suas preferências ou o seu dispositivo e é utilizada principalmente para fazer o website funcionar conforme o esperado. A informação normalmente não o identifica diretamente, mas pode dar-lhe uma experiência web mais personalizada. Uma vez que respeitamos o seu direito à privacidade, pode optar por não permitir alguns tipos de cookies. Clique nos cabeçalhos das diferentes categorias para saber mais e alterar as nossas configurações predefinidas. No entanto, o bloqueio de alguns tipos de cookies pode afetar a sua experiência no website e os serviços que podemos oferecer.
                        <Link id="privacity" to={"/politica-de-privacidade"}>Política de Privacidade</Link></p>
                    </label>
                    <label>
                        <input type="checkbox" checked={preferences.necessary} disabled />
                        Cookies Estritamente Necessários
                        <p>Estes cookies são necessários para que o website funcione e não podem ser desligados nos nossos sistemas. Normalmente, eles só são configurados em resposta a ações levadas a cabo por si e que correspondem a uma solicitação de serviços, tais como definir as suas preferências de privacidade, segurança, iniciar sessão ou preencher formulários. Pode configurar o seu navegador para bloquear ou alertá-lo(a) sobre esses cookies, mas algumas partes do website não funcionarão. Estes cookies não armazenam qualquer informação pessoal identificável.</p>
                    </label>
                    <label>
                        <input type="checkbox" checked={preferences.functionality} onChange={() => handlePreferenceChange("functionality")} />
                        Cookies de Funcionalidade
                        <p>Estes cookies permitem que o site forneça uma funcionalidade e personalização melhoradas. Podem ser estabelecidos por nós ou por fornecedores externos cujos serviços adicionámos às nossas páginas. Se não permitir estes cookies algumas destas funcionalidades, ou mesmo todas, podem não atuar corretamente.</p>
                    </label>
                </Modal.Body>
                <Modal.Footer>
                    <button className="button-cookies" onClick={saveCookiesSettings}>Salvar Configurações</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}