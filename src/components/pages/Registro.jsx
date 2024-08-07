import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {IMaskInput} from "react-imask";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {sendData} from "../../routes/routesAPI";

const URL_CREATE_SESSION = "http://localhost:8080/client/session-data";

export default function Registro() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    async function submitForm(data) {
        const clientData = {
            client_name: data.nome_cliente,
            client_cpf: data.CPF_cliente,
            client_email: data.email_cliente,
            client_phone_number: data.celular_cliente,
            client_birthdate: data.data_nascimento_cliente
        }

        const response = await sendData(URL_CREATE_SESSION, clientData);

        navigate("/criar-senha");
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

                    <form id="form-registro" className="m-auto text-center" onSubmit={handleSubmit(submitForm)}>
                        <div id="centralizer-link-create-account" className="text-start m-auto mb-3 mt-2">
                            <h6>Complete os campos abaixo para abrir sua conta:</h6>
                        </div>
                        <input
                            id="nome-completo"
                            type="text"
                            placeholder="Nome Completo*"
                            required
                            {...register("nome_cliente")}/>
                        <IMaskInput
                            id="CPF-registro"
                            mask="000.000.000-00"
                            placeholder="CPF*"
                            required
                            {...register("CPF_cliente")}/>
                        <input
                            id="email"
                            type="email"
                            placeholder="E-mail*"
                            required
                            {...register("email_cliente")}/>
                        <IMaskInput
                            id="celular"
                            mask="(00) 00000-0000"
                            type="text"
                            placeholder="Celular*"
                            required
                            {...register("celular_cliente")}/>
                        <IMaskInput
                            id="data-nascimento"
                            mask="00/00/0000"
                            type="text"
                            placeholder="Data de Nascimento*"
                            required
                            {...register("data_nascimento_cliente")}/>
                        <div id="aceitar-tratar-dados" className="d-flex align-items-center justify-content-center m-auto text-start mt-3">
                            <input id="check-register" type="checkbox" required/>
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