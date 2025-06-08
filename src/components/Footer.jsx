import React from 'react';
import './Footer.css';
import logo from '../assets/IMG_2964-removebg-preview.png';
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Logo and Tagline */}
                <div className="footer-logo-section">
                    <img src={logo} className='footer-logo-img' />
                    <div className="footer-social-icons">
                        <div className="footer-icon-box"></div>
                        <div className="footer-icon-box"></div>
                        <div className="footer-icon-box"></div>
                    </div>
                </div>

                {/* Contact */}
                <div className="footer-column">
                    <h3 className="footer-heading">Contact</h3>
                    <p>Mention store Address</p>
                    <p>email id</p>
                    <p>+91 8950473829</p>
                </div>

                {/* Main Menu */}
                <div className="footer-column">
                    <h3 className="footer-heading">Main Menu</h3>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Accessories</p>
                    <p>Clothing</p>
                    <p>Contact Us</p>
                </div>

                {/* Links */}
                <div className="footer-column">
                    <h3 className="footer-heading">Links</h3>
                    <p>Shipping Policy</p>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="footer-bottom-bar">
                All Rights Reserved © COMPANY NAME
            </div>
        </footer>
    );
};

export default Footer;
