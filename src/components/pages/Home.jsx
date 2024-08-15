import Menu from "../miscellaneous-components/pages-components/Menu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Duvidas from "../sections-home/Duvidas";
import Beneficios from "../sections-home/Beneficios";
import FooterBank from "../miscellaneous-components/pages-components/Footer";
import CanvasCookies from "../miscellaneous-components/modals-and-canvas/CanvasCookies";

export default function Home() {
    return (
        <>
            <CanvasCookies/>

            <Menu/>
            <div id="space"></div>
            <Row className="d-flex align-items-center justify-content-center m-0" id="banner">
                <Col lg={6} id="text" className="p-5 d-flex justify-content-center">
                    <div>
                        <h1 id="banner-text">Sua vida financeira de uma forma mais prática</h1>
                        <button className="white-button"></button>
                    </div>
                </Col>
                <Col lg={6} className="text-center">
                    <img id="banner-image" alt="banner-image" src="iphone.png" className="floating"></img>
                </Col>
            </Row>
            <Beneficios/>
            <Duvidas/>
            <Row className="m-0">
                <div id="message" className="d-flex justify-content-center p-3 align-items-center">
                    <h1 className="m-0"><b>Ainda não é cliente Nex?</b></h1>
                    <button id="abrir-conta" className="ms-5">ABRA SUA CONTA</button>
                </div>
            </Row>
            <FooterBank/>
        </>
    );
}