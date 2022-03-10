
import React from 'react';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";
import Logo from '../../../images/logo.jpg'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, } from 'react-bootstrap';
 

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="150"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <div>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                        </Form>

                    </div>
                    <div className='d-flex'>

                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action1"> About Us</Nav.Link>

                        <NavDropdown title="Products" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Man</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Electronics</NavDropdown.Item>

                        </NavDropdown>


                        <Nav.Link href="#action1">Reviews</Nav.Link>
                        <Nav.Link href="#action1"><BsFillCartFill /> </Nav.Link>
                        <Nav.Link href="#action1"><BsFillPersonFill /> </Nav.Link>
                    </div>


                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <Navbar.Brand href="#home">
                                    <img
                                        src={Logo}
                                        width="150"
                                        height="80"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>

                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Man</Nav.Link>
                                <Nav.Link href="#action1">Women</Nav.Link>
                                <Nav.Link href="#action1">Kids</Nav.Link>
                                <Nav.Link href="#action1">Electronics</Nav.Link>
                                <Nav.Link href="#action1">Contact</Nav.Link>

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;