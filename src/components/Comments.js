import {Image, Media} from "react-bootstrap";
import comment1 from "../assets/images/comment1.png";
import comment2 from "../assets/images/comment2.png";

const Comments = () => {
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
                        </Media.Body>
                    </Media>
                </Media.Body>
            </Media>
        </div>
    )
}

export default Comments;