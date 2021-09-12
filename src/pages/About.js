import {Col, Container, Image, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import React from "react";
import Slide from "../components/Slide";
import about from "../assets/images/about.jpg";
import {Check2} from "react-bootstrap-icons";

const About = () => {
    return (
        <div className="about">
            <Container className="main-container">
                <Row>
                    <Col lg={8} md={12}>
                        <Image src={about} fluid />
                        <h5 className="mt-5 about-title">About me</h5>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                            unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam.
                        </p>
                        <p className="text-center font-weight-bold text-dark">“Always use active voice over the passive one.”</p>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt quaerat voluptatem.
                        </p>
                        <ul>
                            <li><Check2 className="mr-3 about-icon" size={20} />Nemo enim ipsam voluptatem</li>
                            <li><Check2 className="mr-3 about-icon" size={20} />Duis aute irure dolor</li>
                            <li><Check2 className="mr-3 about-icon" size={20} />Ut enim ad minim veniam</li>
                            <li><Check2 className="mr-3 about-icon" size={20} />Excepteur sint occaecat</li>
                        </ul>
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

export default About;