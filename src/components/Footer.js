import {NavbarBrand} from "react-bootstrap";
import logo from "../assets/images/logo.png";
import React from "react";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <NavbarBrand><img src={logo} alt="Logo"/></NavbarBrand>
                    </div>
                    <div className="col-md-3 pt-2">
                        <h6 className="footer-title">Pages</h6>
                        <nav className="nav flex-column">
                            <a className="nav-link pl-0 footer-link" href={"/contact"}>Contact</a>
                            <a className="nav-link pl-0 footer-link" href={"/about"}>About Us</a>
                            <a className="nav-link pl-0 footer-link" href={"/portfolio"}>Portfolio</a>
                        </nav>
                    </div>
                    <div className="col-md-3 pt-2">
                        <h6 className="footer-title">Link</h6>
                        <nav className="nav flex-column">
                            <a className="nav-link pl-0 footer-link" href={"/term-of-service"}>Term Of Service</a>
                            <a className="nav-link pl-0 footer-link" href={"/privacy"}>Privacy Policy</a>
                            <a className="nav-link pl-0 footer-link" href={"/service"}>Service</a>
                        </nav>
                    </div>
                    <div className="col-md-3 pt-2">
                        <h6 className="footer-title">Subscribe</h6>
                        <input className="border-bottom border-secondary w-100 pt-2 pb-2 footer-input" type="text" placeholder={"Enter your email address"}/>
                        <div className="d-flex justify-content-center follow-us-icons pt-5">
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;