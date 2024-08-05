import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Beneficios() {
    return (
        <>
            <Row className="m-0 mt-5 mb-5 p-5">
                <h1 className="text-center" id="benefits-title">O que oferecemos?</h1>
                <Row id="benefits" className="pt-3 justify-content-around">
                    <Col lg={5} className="benefit">
                        <i class="bi bi-person-lock"></i>
                        <h3>Segurança</h3>
                        <p>Seus dados e transações estão sempre seguros contras fraudes e roubo de identidade.</p>
                    </Col>

                    <Col lg={5} className="benefit">
                        <i class="bi bi-piggy-bank"></i>
                        <h3>Empréstimos rápidos</h3>
                        <p>Empréstimo consignado, pessoal e FGTS com taxa de juros mais baixas em comparação com outros bancos e liberação rápida.</p>
                    </Col>

                    <Col lg={5} className="benefit">
                        <i class="bi bi-credit-card"></i>
                        <h3>Conta sem taxas e completa</h3>
                        <p>Conta totalmente gratuita, com cartão sem anuidade e portabilidade de salário.</p>
                    </Col>

                    <Col lg={5} className="benefit">
                        <i class="bi bi-graph-up-arrow"></i>
                        <h3>Rendimento de CDI</h3>
                        <p>O melhor rendimento automático depois de 30 dias, sem limite de investimento e muita liberdade para escolher o que usar.</p>
                    </Col>
                </Row>
            </Row>
        </>
    );
}