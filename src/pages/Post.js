import {Container, Row, Col, Image} from "react-bootstrap";
import React from "react";
import blog1 from "../assets/images/blog-1.jpg";
import {Check2} from "react-bootstrap-icons";
import Social from "../components/Social";
import Slide from "../components/Slide";
import Comments from "../components/Comments";

const Post = () => {
    return (
        <div className="post">
            <Container className="main-container">
                <Row className="justify-content-center pb-3">
                    <Col lg={10} md={11} className="border-bottom">
                        <Image src={blog1} fluid />
                        <h1 className="mt-5 mb-3">How to start a successful photography business</h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque inventore veritatis.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                            natus error sit voluptatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
                        </p>
                        <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <ul className="mt-3 mb-3">
                            <li><Check2 className="mr-3 about-icon" size={20} />Nemo enim ipsam voluptatem</li>
                            <li><Check2 className="mr-3 about-icon" size={20} />Duis aute irure dolor</li>
                            <li><Check2 className="mr-3 about-icon" size={20} />Ut enim ad minim veniam</li>
                            <li><Check2 className="mr-3 about-icon" size={20} />Excepteur sint occaecat</li>
                        </ul>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                            natus error sit voluptatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </p>
                        <Row className="align-items-center">
                            <Col md={5}>
                                <p className="post-quote">
                                    “ Always use active voice over the passive one.Come up with a
                                    catchy and distinctive phrases that will set you apart from the others ”
                                </p>
                            </Col>
                            <Col md={7}>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat laborum.
                                </p>
                            </Col>
                        </Row>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                        </p>
                    </Col>
                </Row>
                <Row className="follow-us-icons justify-content-center">
                    <span className="mr-3 post-share">Share this article:</span> <Social />
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col lg={10} md={11}>
                        <Comments />
                    </Col>
                </Row>
            </Container>
            <Slide />
        </div>
    )
}

export default Post;