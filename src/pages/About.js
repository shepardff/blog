import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import React from "react";
import Slide from "../components/Slide";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: "",
        }
    }

    componentDidMount() {
        axios.get('/api/about').then(res => {
            this.setState({ about: res.data.about })
        });
    }

    render() {
        return (
            <div className="about">
                <Container className="main-container">
                    <Row>
                        <Col lg={8} md={12}>
                            { ReactHtmlParser(this.state.about) }
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

export default About;