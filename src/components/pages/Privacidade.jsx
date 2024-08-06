import Menu from "../Menu";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FooterBank from "../Footer";

export default function Privacidade() {
    return (
        <>
            <Menu />
            <div id="space"></div>
            <div className="d-flex justify-content-center mt-4 mb-4">
                <Row className="m-0" id="privacidade-content">
                    <Col lg={12}>
                        <h1>Política de Privacidade</h1><br/>
                        <p>
                            Bem-vindo ao Nex Bank. Valorizamos sua privacidade e estamos comprometidos em proteger suas
                            informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos,
                            armazenamos e protegemos suas informações quando você utiliza nossos serviços.<br/><br/>

                            <h5><b>1. Informações que Coletamos</b></h5>

                            Coletamos e processamos as seguintes categorias de informações:

                            <ul>
                                <li><u>Informações Pessoais</u>: nome, endereço, data de nascimento, número de telefone,
                                    e-mail e informações de identificação.
                                </li>
                                <li><u>Informações de Conta</u>: número da conta, histórico de transações, dados de
                                    login e senhas.
                                </li>
                                <li><u>Informações Financeiras</u>: dados bancários, informações de cartão de
                                    crédito/débito e detalhes de transações.
                                </li>
                            </ul>

                            <h5><b>2. Como Usamos Suas Informações</b></h5>

                            Utilizamos suas informações para os seguintes fins:

                            <ul>
                                <li><u>Prestação de Serviços</u>: para gerenciar sua conta, processar transações e
                                    fornecer suporte ao cliente.
                                </li>
                                <li><u>Segurança e Prevenção de Fraude</u>: para identificar e prevenir atividades
                                    fraudulentas e garantir a segurança de nossas plataformas.
                                </li>
                                <li><u>Comunicações</u>: para enviar atualizações sobre sua conta, alterações nos nossos
                                    serviços e ofertas promocionais.
                                </li>
                                <li><u>Melhoria dos Serviços</u>: para analisar como você utiliza nossos serviços e
                                    melhorar a qualidade e funcionalidade dos mesmos.
                                </li>
                                <li><u>Cumprimento Legal</u>: para cumprir com obrigações legais e regulatórias.</li>
                            </ul>


                            <h5><b>3. Compartilhamento de Informações</b></h5>

                            Podemos compartilhar suas informações com:

                            <ul>
                                <li><u>Prestadores de Serviços</u>: empresas que realizam serviços em nosso nome, como
                                    processadores de pagamentos e provedores de serviços de tecnologia.
                                </li>
                                <li><u>Autoridades Legais</u>: se exigido por lei ou para cumprir com processos legais,
                                    regulamentares ou administrativos.
                                </li>
                                <li><u>Parcerias Comerciais</u>: com parceiros para oferecer produtos e serviços
                                    adicionais, sempre respeitando sua privacidade.
                                </li>
                            </ul>

                            <h5><b>4. Segurança das Informações</b></h5>

                            Implementamos medidas de segurança adequadas para proteger suas informações contra acesso
                            não autorizado, alteração, divulgação ou destruição. Utilizamos tecnologias de criptografia
                            e protocolos seguros para proteger suas informações.<br/><br/>

                            <h5><b>5. Seus Direitos</b></h5>

                            Você tem os seguintes direitos em relação às suas informações pessoais:

                            <ul>
                                <li><u>Acesso</u>: solicitar uma cópia das informações que temos sobre você.</li>
                                <li><u>Correção</u>: corrigir informações pessoais imprecisas ou desatualizadas.</li>
                                <li><u>Exclusão</u>: solicitar a exclusão de suas informações, sujeita a certas exceções
                                    legais.
                                </li>
                                <li><u>Oposição</u>: opor-se ao processamento de suas informações para determinados
                                    fins.
                                </li>
                                <li><u>Portabilidade</u>: solicitar a transferência de suas informações para outro
                                    controlador de dados.
                                </li>
                            </ul>

                            <h5><b>6. Cookies</b></h5>

                            Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência e analisar o uso
                            de nossos serviços. Você pode ajustar as configurações de cookies em seu navegador, mas isso
                            pode afetar a funcionalidade do nosso site e aplicativos.<br/><br/>

                            <h5><b>7. Alterações na Política de Privacidade</b></h5>

                            Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em
                            nossas práticas ou requisitos legais. Publicaremos quaisquer alterações em nosso site e, se
                            apropriado, notificaremos você por e-mail.<br/><br/>

                            <h5><b>8. Contato</b></h5>

                            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de suas
                            informações pessoais, entre em contato conosco pelo e-mail <b>nexbank@gmail.com</b> ou pelo
                            telefone <b>(11) 92345-6789</b>.
                        </p>
                    </Col>
                </Row>
            </div>
            <FooterBank />
        </>
    );
}