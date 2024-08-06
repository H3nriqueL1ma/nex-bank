import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {IMaskInput} from "react-imask";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Icon from "react-icons-kit";

export default function Registro() {
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
                        <h3>Abra sua conta Nex</h3>
                        <img id="logo-login" src="logo.png" alt="logo"/>
                    </div>

                    <form id="form-registro" className="m-auto text-center">
                        <div id="centralizer-link-create-account" className="text-start m-auto mb-3 mt-2">
                            <h6>Complete os campos abaixo para abrir sua conta:</h6>
                        </div>
                        <input id="nome-completo" type="text" placeholder="Nome Completo*" required/>
                        <IMaskInput id="CPF-registro" mask="000.000.000-00" placeholder="CPF*" required/>
                        <input id="email" type="email" placeholder="E-mail*" required/>
                        <IMaskInput id="celular" mask="(00) 00000-0000" type="text" placeholder="Celular*" required/>
                        <IMaskInput id="data-nascimento" mask="00/00/0000" type="text" placeholder="Data de Nascimento*" required/>
                        <div id="aceitar-tratar-dados" className="d-flex align-items-center justify-content-center m-auto text-start mt-3">
                            <input id="check-register" type="checkbox"/>
                            <h6>Autorizo o Nex a tratar os meus dados pessoais e declaro que li e estou ciente da <Link to={"/politica-de-privacidade"}>Política de Privacidade</Link></h6>
                        </div>
                        <div>
                            <button id="submit-login">Enviar</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </>
    );
}