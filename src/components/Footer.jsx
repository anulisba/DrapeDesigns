import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/IMG_2964-removebg-preview.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [activePolicy, setActivePolicy] = useState(null);

    const togglePolicy = (policy) => {
        setActivePolicy(prev => (prev === policy ? null : policy));
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Logo and Social */}
                <div className="footer-logo-section">
                    <img src={logo} alt="Company Logo" className="footer-logo-img" />
                    <p className="footer-tagline">Premium Fashion & Accessories</p>
                    <div className="footer-social-icons">
                        <div className="footer-icon-box"><FaFacebookF className="footer-icon" /></div>
                        <div className="footer-icon-box"><FaInstagram className="footer-icon" /></div>
                        <div className="footer-icon-box"><FaTwitter className="footer-icon" /></div>
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
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/about-us" className="footer-link">About Us</Link>
                    <Link to="/clothing-store" className="footer-link">Clothing</Link>
                    <a href="#contact" className="footer-link">Contact Us</a> {/* You can replace with a scroll if "Contact Us" is a section */}
                </div>

                {/* Expandable Policies */}
                <div className="footer-column">
                    <h3 className="footer-heading">Links</h3>

                    {[
                        { key: "shipping", label: "Shipping Policy", content: "We ship within 5-7 business days. Free delivery for orders above ₹999." },
                        { key: "privacy", label: "Privacy Policy", content: "Your personal data is secured and will not be shared without consent." },
                        { key: "refund", label: "Refund Policy", content: "We offer 7-day return/refund policy on unused items with tags." },
                        { key: "terms", label: "Terms & Conditions", content: "By using our site, you agree to comply with our terms outlined herein." },
                    ].map(({ key, label, content }) => (
                        <div key={key} className="footer-policy-section">
                            <div className="footer-policy-header" onClick={() => togglePolicy(key)}>
                                <span className="footer-link">{label}</span>
                                {activePolicy === key ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {activePolicy === key && (
                                <div className="footer-policy-content">{content}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom-bar">
                All Rights Reserved © FASHION STORE {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;
