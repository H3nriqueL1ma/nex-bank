import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export default function FooterBank() {
    return (
        <>
            <footer className="p-5 pt-3 pb-3">
                <Row className="m-0">
                    <Col lg={2}>
                        <div className="informations m-3">
                            <p className="m-0">SAC</p>
                            <h6 className="m-0">0800 123 4567</h6>
                        </div>
                        <div className="informations m-3">
                            <p className="m-0">Whatsapp</p>
                            <h6 className="m-0">11 1234 4789</h6>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="informations m-3">
                            <p className="m-0">Ouvidoria</p>
                            <h6 className="m-0">0800 456 7890</h6>
                        </div>
                        <div className="informations m-3">
                            <p className="m-0">Canal de Denúncias</p>
                            <h6 className="m-0">0800 567 8901</h6>
                        </div>
                    </Col>
                    <Col lg={8} className="d-flex align-items-center justify-content-end">
                        <div>
                            <div className="informations m-3">
                                <p className="m-0">© Nex Bank - CNPJ 12.345.678/0001-90 - São Paulo, SP</p>
                            </div>
                            <div className="informations m-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/H3nriqueL1ma"><i class="bi bi-github"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/henrique-lima-51b957264/"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </footer>
        </>
    );
}