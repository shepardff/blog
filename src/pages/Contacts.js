import Map from "../components/Map";
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import Slide from "../components/Slide";
import Sidebar from "../components/Sidebar";
import {EnvelopeFill, GeoAltFill, TelephoneFill} from "react-bootstrap-icons";

const Contacts = () => {
    return (
        <div>
            <Container className="main-container mb-5">
                <Row>
                    <Col lg={8} md={12} >
                        <h5 className="mb-3 contact-title">Contact Us</h5>
                        <div className="map-container">
                            <Map />
                        </div>
                        <ul className="mt-5">
                            <li className="mb-3"><GeoAltFill className="mr-3 contact-icon" />74 Guild Street 542B, Great North Town MT.</li>
                            <li className="mb-3"><TelephoneFill className="mr-3 contact-icon" />4355 6567 789</li>
                            <li className="mb-3"><EnvelopeFill className="mr-3 contact-icon" />example@yourname.com</li>
                        </ul>
                        <h5>Keep In Touch:</h5>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridTitle">
                                <Form.Control placeholder="Subject Title" />
                            </Form.Group>

                            <Form.Group controlId="formGridMessage">
                                <Form.Control as="textarea" rows={4} placeholder="Message"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit Message
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={4} md={12} className="pl-lg-5 sidebar" >
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
            <Slide />
        </div>
    )
}

export default Contacts;