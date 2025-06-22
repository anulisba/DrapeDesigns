import React from 'react';
import './Footer.css';
import logo from '../assets/IMG_2964-removebg-preview.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Logo and Social */}
                <div className="footer-logo-section">
                    <img src={logo} alt="Company Logo" className="footer-logo-img" />
                    <p className="footer-tagline">Premium Fashion & Accessories</p>
                    <div className="footer-social-icons">
                        <div className="footer-icon-box">FB</div>
                        <div className="footer-icon-box">IG</div>
                        <div className="footer-icon-box">TW</div>
                    </div>
                </div>

                {/* Contact */}
                <div className="footer-column">
                    <h3 className="footer-heading">Contact</h3>
                    <p>123 Fashion Street, Style City</p>
                    <p>info@yourstore.com</p>
                    <p>+91 8950473829</p>
                </div>

                {/* Main Menu */}
                <div className="footer-column">
                    <h3 className="footer-heading">Main Menu</h3>
                    <a href="#" className="footer-link">Home</a>
                    <a href="#" className="footer-link">About Us</a>
                    <a href="#" className="footer-link">Accessories</a>
                    <a href="#" className="footer-link">Clothing</a>
                    <a href="#" className="footer-link">Contact Us</a>
                </div>

                {/* Links */}
                <div className="footer-column">
                    <h3 className="footer-heading">Links</h3>
                    <a href="#" className="footer-link">Shipping Policy</a>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Refund Policy</a>
                    <a href="#" className="footer-link">Terms & Conditions</a>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="footer-bottom-bar">
                All Rights Reserved © FASHION STORE {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;