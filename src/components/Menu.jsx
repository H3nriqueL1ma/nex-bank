import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <Navbar id="navbar" expand="lg" className="bg-body-tertiary p-0">
                <Container id="container-nav">
                    <Navbar.Brand>
                        <Link to={"/"}>
                            <img id="logo-menu" src="logo.png" alt="logo"></img>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown title="Para você" id="basic-nav-dropdown">
                            <div>
                                <h6>Conta</h6>
                                <NavDropdown.Item href="#action/3.1">Conta Digital</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Cartão de Crédito</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rendimentos</NavDropdown.Item>
                            </div>
                            <div>
                                <h6>Empréstimos</h6>
                                <NavDropdown.Item href="#action/3.1">Antecipação FGTS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Empréstimo Consignado</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Empréstimo Pessoal</NavDropdown.Item>
                            </div>
                        </NavDropdown>
                        <NavDropdown title="Sobre o Nex" id="basic-nav-dropdown" className="about">
                            <NavDropdown.Item href="#action/3.1">Sobre nós</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Ajuda" id="basic-nav-dropdown" className="about">
                            <NavDropdown.Item href="#action/3.1">Fale com a gente</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ouvidoria</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div id="button-div">
                        <Link to={"/login"}>
                            <button id="user-access">
                                <p className="m-0">Acesse sua conta</p>
                            </button>
                        </Link>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}