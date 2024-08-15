import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import ErrorModal from "../errors-animations-functions/ErrorModal";
import { useState } from "react";
import { sendData } from "../routes/routesAPI";
import InputCustom from "../miscellaneous-components/inputs/InputCustom";
import InputCustomController from "../miscellaneous-components/inputs/InputCustomController";

const URL_CREATE_SESSION = "http://localhost:8080/client/session-data";

export default function Registro() {
    const { register, control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [textModal, setTextModal] = useState("");
    const [showModal, setShowModal] = useState(false);

    async function submitForm(data) {
        const clientData = {
            client_name: data.nome_cliente,
            client_cpf: data.CPF_cliente,
            client_email: data.email_cliente,
            client_phone_number: data.celular_cliente,
            client_birthdate: data.data_nascimento_cliente,
            check_value: data.check_value
        }

        const response = await sendData(URL_CREATE_SESSION, clientData);

        if (response.code === 201) {
            navigate("/criar-senha");
        } else {
            setTextModal("Não foi possível cadastrar os dados. Verifique se todos os campos obrigatórios estão preenchidos corretamente e se o CPF, e-mail ou telefone fornecido não está registrado.");
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
                        <Link to={"/"}>
                            <img id="logo-login" src="logo.png" alt="logo"/>
                        </Link>
                    </div>

                    <form id="form-registro" className="m-auto text-center" onSubmit={handleSubmit(submitForm)}>
                        <div id="centralizer-link-create-account" className="text-start m-auto mb-3 mt-2">
                            <h6>Complete os campos abaixo para abrir sua conta:</h6>
                        </div>
                        <InputCustom
                            id="nome-completo"
                            type="text"
                            placeholder="Nome Completo*"
                            register={register("nome_cliente")}
                        />
                        <InputCustomController
                            name="CPF_cliente"
                            control={control}
                            id="CPF-registro"
                            type="text"
                            placeholder="CPF*"
                            mask="000.000.000-00"
                        />
                        <InputCustom
                            id="email"
                            type="email"
                            placeholder="E-mail*"
                            register={register("email_client")}
                        />
                        <InputCustomController
                            name="celular_cliente"
                            control={control}
                            id="celular"
                            mask="(00) 90000-0000"
                            type="text"
                            placeholder="Celular*"
                        />
                        <InputCustomController
                            name="data_nascimento_cliente"
                            control={control}
                            id="data-nascimento"
                            mask="00/00/0000"
                            type="text"
                            placeholder="Data de Nascimento*"
                        />
                        <div id="aceitar-tratar-dados" className="d-flex align-items-center justify-content-center m-auto text-start mt-3">
                            <InputCustom
                                id="check-register"
                                type="checkbox"
                                register={register("check_value")}
                            />
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