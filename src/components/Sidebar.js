import {Button, Image, Media} from "react-bootstrap";
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
import Social from "./Social";
import React from "react";

const Sidebar = () => {
    return (
        <div>
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
        </div>
    )
}

export default Sidebar;