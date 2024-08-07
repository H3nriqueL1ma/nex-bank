import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {IMaskInput} from "react-imask";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Icon from "react-icons-kit";

export default function Login() {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);

    const isEdge = () => window.navigator.userAgent.indexOf("Edg") > 1;

    useEffect(() => {
        const input = document.querySelector("#password");
        const span = document.querySelector(".span-eye");
        const eyeInput = document.querySelector("#icon-eye");

        if (isEdge()) {
            if (span) span.style.display = "none";
            if (eyeInput) eyeInput.style.display = "none";
        } else {
            if (input) input.style.paddingRight = "40px";
            if (input) input.style.marginLeft = "-12px";
        }
    }, []);

    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    }

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

                    <form id="form-login" className="m-auto text-center">
                        <div id="centralizer-link-create-account" className="text-end m-auto">
                            <p>Não possui conta? <Link to={"/registre-se"}>Abra sua conta</Link>.</p>
                        </div>
                        <IMaskInput
                            id="CPF"
                            mask="000.000.000-00"
                            placeholder="CPF"
                            required
                            autoFocus/>
                        <div id="pass-div" >
                            <input
                                id="password"
                                type={type}
                                placeholder="Digite sua senha"
                                required/>
                            <span className="span-eye" onClick={handleToggle}>
                                <Icon id="icon-eye" icon={icon} size={23} />
                            </span>
                        </div>
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