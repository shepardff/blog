import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";

class Home extends React.Component {
    render() {
        return (
            <Container className="home-container">
                <Row>
                    <Col lg={8} md={12}>
                        <Card className="mb-5">
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">How to start a successful photography business</Card.Title>
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
                                <Card.Title className="font-weight-bold">How you see things in powerful life</Card.Title>
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
                                <Card.Title className="font-weight-bold">You work your way to creative thinking</Card.Title>
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
                                <Card.Title className="font-weight-bold">Satisfaction of making and fixing their own things</Card.Title>
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
                    <Col lg={4} md={12} className="pl-lg-5">
                        <div>Sidebar</div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;