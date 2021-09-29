import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container
} from "react-bootstrap";

import logo from "../assets/images/logo.png";


const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top" >
            <Container>
                <Navbar.Brand className="text-dark" href="/"><img src={logo} alt="Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-3">
                        <Nav.Link className="text-dark mx-lg-3" href="/">Home</Nav.Link>
                        <Nav.Link className="text-dark mx-lg-3" href="/about">About Us</Nav.Link>
                        <Nav.Link className="text-dark mx-lg-3" href="/contacts">Contacts</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="header-button">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;