import {Button, Col, Form, Image, Media} from "react-bootstrap";
import {ReplyFill} from "react-bootstrap-icons";
import React from "react";


class Comments extends React.Component {

    createCommentList(obj) {
        return obj.map(elem => {
            return (
                <Media className="mt-5">
                    <Image
                        width={68}
                        height={68}
                        src={ elem.image }
                        roundedCircle
                        alt={ elem.name }
                        className="mr-4"
                    />
                    <Media.Body>
                        <p className="comment-name mb-0">{ elem.name }</p>
                        <p className="comment-text">
                            { elem.text }
                        </p>
                        <a href={"#reply"} className="comment-reply"><ReplyFill className="mr-1"/> Reply</a>

                        { Array.isArray(elem.answer) ? this.createCommentList(elem.answer) : false }
                    </Media.Body>
                </Media>
            )
        });
    }

    render() {

        const comments = this.createCommentList(this.props.comments);


        return (
            <div className="comments">
                <h5>Comments</h5>
                { comments }

                <h5 className="mt-5 mb-3">Post a comment</h5>

                <Form className="mb-5">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Control placeholder="Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridMessage">
                        <Form.Control as="textarea" rows={4} placeholder="Message"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
        )
    }
}



export default Comments;