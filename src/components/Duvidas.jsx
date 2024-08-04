import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/esm/Row';

export default function Duvidas() {
    return (
        <>
            <Row className="m-0 pt-5 mb-5 justify-content-center">
                <h1 className="text-center">Dúvidas?</h1>
                <Accordion id="accordions" className="p-0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>O que é uma Conta Corrente?</Accordion.Header>
                        <Accordion.Body>
                        É uma conta bancária que permite a livre movimentação dos recursos financeiros de forma eletrônica e digital ou por meio de cheque, cartão magnético e saques presenciais, sem a interferência do banco. Possibilita a realização de transações como transferências de valores, PIX, TED, depósito de cheques, débito automático, aplicação financeira, entre outras.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Qual a diferença entre Conta Corrente e Conta Salário?</Accordion.Header>
                        <Accordion.Body>
                        A Conta Salário é aberta por iniciativa e solicitação do empregador para recebimento de salários, proventos, soldos, pensões ou similares por parte dos seus funcionários . Essa conta possui transações limitadas e não permite: cadastramento de limite de crédito, realização de investimentos, uso de cheque, adesão ao débito automático ou transferências por meio de TED/DOC ou Pix. Além disso, a transferência de qualquer valor da conta salário do BB só é permitida para conta do mesmo titular no Banco do Brasil.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Qual a vantagem de se ter uma Conta Corrente?</Accordion.Header>
                        <Accordion.Body>
                        A Conta Corrente é uma opção completa e moderna, ideal para quem busca praticidade e agilidade no dia a dia financeiro. Com a Conta Corrente BB, além de poder receber o seu salário, você tem acesso a um amplo portfólio de produtos e serviços, como saques, Pix, transferências, TED, débito automático, depósito de cheques, pagamento de contas e boletos, empréstimos com condições especiais*, investimentos, seguros e muito mais.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </>
    );
}