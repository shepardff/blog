import React from "react";
import {Facebook, Instagram, Linkedin, Reddit, Twitter} from "react-bootstrap-icons";

const Social = () => {
    return (
        <div>
            <a href="https://facebook.com">
                <Facebook />
            </a>

            <a href="https://twitter.com">
                <Twitter />
            </a>

            <a href="https://instagram.com">
                <Instagram />
            </a>

            <a href="https://reddit.com">
                <Reddit />
            </a>

            <a href="https://linkedin.com">
                <Linkedin />
            </a>
        </div>
    )
}

export default Social;