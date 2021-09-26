import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";
import Sidebar from "../components/Sidebar";
import Slide from "../components/Slide";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container className="main-container">
                    <Row>
                        <Col lg={8} md={12}>
                            <Card className="mb-5">
                                <Card.Img variant="top" src={blog1} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="/blog-post" className="text-dark">How to start a successful photography business</Card.Link></Card.Title>
                                    <Card.Text className="font-weight-light text-secondary">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Card.Link href="/blog-post" className="text-dark"><small>Read More</small></Card.Link>
                                        <small className="text-muted">March 20</small>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-5">
                                <Card.Img variant="top" src={blog2} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="/blog-post" className="text-dark">How you see things in powerful life</Card.Link></Card.Title>
                                    <Card.Text className="font-weight-light text-secondary">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Card.Link href="/blog-post" className="text-dark"><small>Read More</small></Card.Link>
                                        <small className="text-muted">March 20</small>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-5">
                                <Card.Img variant="top" src={blog3} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="/blog-post" className="text-dark">You work your way to creative thinking</Card.Link></Card.Title>
                                    <Card.Text className="font-weight-light text-secondary">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Card.Link href="/blog-post" className="text-dark"><small>Read More</small></Card.Link>
                                        <small className="text-muted">March 20</small>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-5">
                                <Card.Img variant="top" src={blog4} />
                                <Card.Body>
                                    <Card.Title><Card.Link href="/blog-post" className="text-dark">Satisfaction of making and fixing their own things</Card.Link></Card.Title>
                                    <Card.Text className="font-weight-light text-secondary">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Card.Link href="/blog-post" className="text-dark"><small>Read More</small></Card.Link>
                                        <small className="text-muted">March 20</small>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={12} className="pl-lg-5 mt-md-5 mt-lg-0 sidebar">
                            <Sidebar />
                        </Col>
                    </Row>
                </Container>
                <Slide />
            </div>
        )
    }
}

export default Home;