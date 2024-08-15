import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Icon from "react-icons-kit";
import {useEffect, useState} from "react";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { sendData } from "../routes/routesAPI";
import ErrorModal from "../errors-animations-functions/ErrorModal";
import InputCustom from "../miscellaneous-components/inputs/InputCustom";

const URL_CREATE_USER = "http://localhost:8080/client/register";

export default function Registro() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [textModal, setTextModal] = useState("");
    const [showModal, setShowModal] = useState(false);

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

    async function submitForm(data) {
        const clientData = {
            client_username: data.nome_usuario,
            client_password: data.senha_usuario
        }

        const response = await sendData(URL_CREATE_USER, clientData);
        
        if (response.code === 201) {
            navigate("/login");
        } else {
            setTextModal("Não foi possível cadastrar os dados. Verifique se todos os campos obrigatórios estão preenchidos corretamente e se o Usuário não está registrado.");
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
                        <h3>Abra sua conta Nex</h3>
                        <img id="logo-login" src="logo.png" alt="logo"/>
                    </div>

                    <form id="form-login" className="m-auto text-center" onSubmit={handleSubmit(submitForm)}>
                        <div id="centralizer-link-create-account" className="text-start m-auto mb-3 mt-2">
                            <h6>Crie seu nome de usuário e nova senha:</h6>
                        </div>
                        <InputCustom
                            id="nome-usuário"
                            type="text"
                            placeholder="Usuário"
                            register={register("nome_usuario")}
                        />
                        <div id="pass-div">
                            <InputCustom
                                id="password"
                                type={type}
                                placeholder="Nova Senha"
                                register={register("senha_usuario")}
                            />
                            <span className="span-eye" onClick={handleToggle}>
                                <Icon id="icon-eye" icon={icon} size={23}/>
                            </span>
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