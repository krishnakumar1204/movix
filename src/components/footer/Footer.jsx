import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Thank you for using our movie listing app! We hope you've enjoyed exploring the world of cinema with us. From blockbusters to hidden gems, we strive to provide you with an immersive movie experience at your fingertips. Stay tuned for the latest releases, showtimes, and exclusive content. Lights, camera, action!
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/krishnakumar1508" target="_blank">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    </a>
                    <a href="https://www.instagram.com/krishna_kumar_k_k_/" target="_blank">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    <a href="https://github.com/krishnakumar1204" target="_blank">
                    <span className="icon">
                        <FaGithub />
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/in/krishna-kumar1508/" target="_blank">
                    <span className="icon" >
                        <FaLinkedin />
                    </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
