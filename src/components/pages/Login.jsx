import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Icon from "react-icons-kit";
import { useForm } from "react-hook-form";
import encodeCredentials from "../routes/authCredentials";
import { authData } from "../routes/routesAPI";
import ErrorModal from "../errors-animations-functions/ErrorModal";
import InputCustom from "../miscellaneous-components/inputs/InputCustom";
import InputCustomController from "../miscellaneous-components/inputs/InputCustomController";

const URL_LOGIN_AUTH = "http://localhost:8080/client/login";

export default function Login() {
    const { register, control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const [textModal, setTextModal] = useState("");
    const [showModal, setShowModal] = useState(false);

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

    async function submitForm(data) {
        const encodedCredentials = encodeCredentials(data.CPF_login, data.pass_login);

        const response = await authData(URL_LOGIN_AUTH, encodedCredentials);

        if (response.code === 200) {
            navigate("/dashboard");
        } else {
            setTextModal("Não foi possível logar na sua conta. Verifique se o CPF está registrado e a senha correta.");
            setShowModal(true);
        }
    }

    return (
        <>
            <ErrorModal 
                show={showModal} 
                handleClose={ () => setShowModal(false) }
                text={textModal}
            />

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
                        <Link to={"/"}>
                            <img id="logo-login" src="logo.png" alt="logo"/>
                        </Link>
                    </div>

                    <form id="form-login" className="m-auto text-center" onSubmit={handleSubmit(submitForm)}>
                        <div id="centralizer-link-create-account" className="text-end m-auto">
                            <p>Não possui conta? <Link to={"/registre-se"}>Abra sua conta</Link>.</p>
                        </div>
                        <InputCustomController
                            name="CPF_login"
                            control={control}
                            id="CPF"
                            mask="000.000.000-00"
                            placeholder="CPF"
                            type="text"
                        />
                        <div id="pass-div">
                            <InputCustom
                                id="password"
                                type={type}
                                placeholder="Digite sua senha"
                                register={register("pass_login")}
                            />
                            <span className="span-eye" onClick={handleToggle}>
                                <Icon id="icon-eye" icon={icon} size={23} />
                            </span>
                        </div>
                        <div>
                            <button id="submit-login">Acessar</button>
                        </div>
                        <span id="forget-pass">Esqueci minha senha</span>
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