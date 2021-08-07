import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container
} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="md">
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;