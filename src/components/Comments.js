import { Button, Col, Form, Image, Media } from "react-bootstrap";
import comment1 from "../assets/images/comment1.png";
import comment2 from "../assets/images/comment2.png";
import { ReplyFill } from "react-bootstrap-icons";
import React from "react";


class Comments extends React.Component {

    createCommentList(obj) {
        for (let value of Object.values(obj)) {
            if (Array.isArray(value)) {
                for (let obj of value) {
                    this.createCommentList(obj)
                }
            } else {
                console.log(value)
            }
            // if (Array.isArray(value)) {
            //     console.log(value);
            //     this.createCommentList(value);
            // } else {
            //     console.log(value)
            // }
        }

        // if (Array.isArray(comments)) {
        //     return (
        //         <Media className="mt-5">
        //             <Image
        //                 width={68}
        //                 height={68}
        //                 src={ comments.image }
        //                 roundedCircle
        //                 alt={ comments.name }
        //                 className="mr-4"
        //             />
        //             <Media.Body>
        //                 <p className="comment-name mb-0">{ comments.name }</p>
        //                 <p className="comment-text">
        //                     { comments.text }
        //                 </p>
        //                 <a href={"#reply"} className="comment-reply"><ReplyFill className="mr-1" /> Reply</a>
        //             </Media.Body>
        //         </Media>
        //     )
        // } else {
        //
        // }
    }

    render() {
        for (let obj of this.props.comments) {
            this.createCommentList(obj)
        }

        return (
            <div className="comments">
                <h5>Comments</h5>
                <Media className="mt-5">
                    <Image
                        width={68}
                        height={68}
                        src={comment1}
                        roundedCircle
                        alt="Alex Joyrina"
                        className="mr-4"
                    />
                    <Media.Body>
                        <p className="comment-name mb-0">Alex Joyrina</p>
                        <p className="comment-text">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href={"#reply"} className="comment-reply"><ReplyFill className="mr-1" /> Reply</a>

                        <Media className="mt-5">
                            <Image
                                width={68}
                                height={68}
                                src={comment2}
                                roundedCircle
                                alt="Jama Karleny"
                                className="mr-4"
                            />
                            <Media.Body>
                                <p className="comment-name mb-0">Jama Karleny</p>
                                <p className="comment-text">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                                <a href={"#reply"} className="comment-reply"><ReplyFill className="mr-1" /> Reply</a>

                            </Media.Body>
                        </Media>
                    </Media.Body>
                </Media>

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