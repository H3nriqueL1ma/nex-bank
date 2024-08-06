import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {IMaskInput} from "react-imask";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <Row className="m-0">
                <Col id="banner-login" lg={6} className="text-center">
                    <img src="logo-branco.png" alt="logo"/>
                    <h1>Nex Conta digital</h1>
                    <h2>Não perca tempo e abra sua conta!</h2>
                    <img id="card-image" alt="card-image" src="credit-card-image.png"/>
                </Col>
                <Col id="login" lg={6}>
                    <div className="d-flex align-items-center justify-content-end">
                        <h3>Acesse sua conta</h3>
                        <img id="logo-login" src="logo.png" alt="logo"/>
                    </div>

                    <form className="m-auto text-center">
                        <IMaskInput mask="000.000.000-00" placeholder="CPF"/>
                        <input type="password" placeholder="Digite sua senha"/>
                        <div>
                            <button id="submit-login">Acessar</button>
                        </div>
                        <Link to={"/forget-pass"}>Esqueci minha senha</Link>
                        <div>
                            <p>Alguma dúvida? Acesse a <Link to={""}>Central de Ajuda</Link>.</p>
                            <p>Para conhecer nossa política de privacidade, acesse <Link to={"/politica-de-privacidade"}>aqui</Link>.</p>
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    );
}