import React from "react";
import {Button, Card, Col, Container, Image, Media, Row} from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";
import blog4 from "../assets/images/blog-4.jpg";
import recent1 from "../assets/images/recent-1.jpg";
import recent2 from "../assets/images/recent-2.jpg";
import recent3 from "../assets/images/recent-3.jpg";
import recent4 from "../assets/images/recent-4.jpg";
import insta1 from "../assets/images/insta-1.jpg";
import insta2 from "../assets/images/insta-2.jpg";
import insta3 from "../assets/images/insta-3.jpg";
import insta4 from "../assets/images/insta-4.jpg";
import insta5 from "../assets/images/insta-5.jpg";
import insta6 from "../assets/images/insta-6.jpg";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import slide6 from "../assets/images/slide6.jpg";
import slide7 from "../assets/images/slide7.jpg";
import slide8 from "../assets/images/slide8.jpg";
import Social from "../components/Social";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container className="home-container">
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

                    <Col lg={4} md={12} className="pl-lg-5 sidebar">
                        <div className="widget">
                            <h5>Categories</h5>
                            <ul className="categories-list">
                                <li><a href={"/category/entertainment"}>Entertainment</a></li>
                                <li><a href={"/category/business"}>Business</a></li>
                                <li><a href={"/category/adventure"}>Adventure</a></li>
                                <li><a href={"/category/decorating"}>Decorating</a></li>
                                <li><a href={"/category/travelling"}>Travelling</a></li>
                                <li><a href={"/category/shopping"}>Shopping</a></li>
                            </ul>
                        </div>

                        <div className="widget">
                            <h5>Recent Posts</h5>
                            <div>
                                <Media className="mb-2 recent-media">
                                    <img src={recent1} className="mr-3" alt=""/>
                                    <Media.Body>
                                        <a href={"she-is-known-for-playing"}>She is known for playing</a>
                                        <p>20 Mar, 2020</p>
                                    </Media.Body>
                                </Media>
                                <Media className="mb-2 recent-media">
                                    <img src={recent2} className="mr-3" alt=""/>
                                    <Media.Body>
                                        <a href={"craft-a-life-you-love"}>Craft a life you love</a>
                                        <p className="font-weight-light">12 Mar, 2020</p>
                                    </Media.Body>
                                </Media>
                                <Media className="mb-2 recent-media">
                                    <img src={recent3} className="mr-3" alt=""/>
                                    <Media.Body>
                                        <a href={"wonderland-of-ice-place"}>Wonderland of ice place</a>
                                        <p className="font-weight-light">17 Feb, 2020</p>
                                    </Media.Body>
                                </Media>
                                <Media className="mb-2 recent-media">
                                    <img src={recent4} className="mr-3" alt=""/>
                                    <Media.Body>
                                        <a href={"publish-your-passions"}>Publish your passions</a>
                                        <p className="font-weight-light">12 Jan, 2020</p>
                                    </Media.Body>
                                </Media>
                            </div>
                        </div>

                        <div className="widget">
                            <h5>Tags</h5>
                            <div className="tags-container">
                                <Button variant="light">Lifestyle</Button>
                                <Button variant="light">Food</Button>
                                <Button variant="light">Kids</Button>
                                <Button variant="light">Fashion</Button>
                                <Button variant="light">Travel</Button>
                                <Button variant="light">DIY</Button>
                                <Button variant="light">Music</Button>
                                <Button variant="light">Crafts</Button>
                                <Button variant="light">Business</Button>
                                <Button variant="light">Career</Button>
                            </div>
                        </div>

                        <div className="widget">
                            <h5>Instagram</h5>

                            <a href="https://instagram.com/"><Image className="mr-3 mb-3" src={insta1}/></a>
                            <a href="https://instagram.com/"><Image className="mr-3 mb-3" src={insta2}/></a>
                            <a href="https://instagram.com/"><Image className="mr-3 mb-3" src={insta3}/></a>
                            <a href="https://instagram.com/"><Image className="mr-3 mb-3" src={insta4}/></a>
                            <a href="https://instagram.com/"><Image className="mr-3 mb-3" src={insta5}/></a>
                            <a href="https://instagram.com/"><Image className="mr-3 mb-3" src={insta6}/></a>
                        </div>

                        <div className="widget">
                            <h5>Follow us</h5>
                            <div className="d-flex justify-content-center follow-us-icons">
                                <Social />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
                <Splide
                    options={ {
                        type: 'loop',
                        autoplay: true,
                        height: '12rem',
                        perPage: 8,
                        cover: true,
                        perMove: 1,
                        pagination: false,
                        arrows: false,
                        breakpoints: {
                            1400: {
                                perPage: 7,
                                height: '10rem',
                            },
                            1000: {
                                perPage: 6,
                                height: '10rem',
                            },
                            800: {
                                perPage: 4,
                                height: '9rem',
                            },
                            540: {
                                perPage: 3,
                                height: '9rem',
                            }
                        }
                    } }
                >
                    <SplideSlide>
                        <img src={slide1} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={slide2} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={slide3} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={slide4} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={slide5} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={slide6} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={slide7} alt=""/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={slide8} alt=""/>
                    </SplideSlide>
                </Splide>
            </div>
        )
    }
}

export default Home;