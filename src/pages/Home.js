import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Slide from "../components/Slide";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    createPostList(posts) {
        return posts.map(elem => {
            return (
                <Card className="mb-5">
                    <Card.Img variant="top" src={ elem.image } />
                    <Card.Body>
                        <Card.Title><Card.Link href={ elem.link } className="text-dark"> { elem.title } </Card.Link></Card.Title>
                        <Card.Text className="font-weight-light text-secondary">
                            { elem.text }
                        </Card.Text>
                        <div className="d-flex justify-content-between">
                            <Card.Link href="/blog-post" className="text-dark"><small>Read More</small></Card.Link>
                            <small className="text-muted">{ elem.date }</small>
                        </div>
                    </Card.Body>
                </Card>
            )
        })
    }

    componentDidMount() {
        axios.get('/api/home').then(res => {
            this.setState({
                posts: this.createPostList(res.data.posts),
            })
        })
    }

    render() {
        return (
            <div>
                <Container className="main-container">
                    <Row>
                        <Col lg={8} md={12}>
                            { this.state.posts }
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