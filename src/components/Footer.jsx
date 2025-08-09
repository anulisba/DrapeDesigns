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
                        <a
                            href="https://www.instagram.com/drape_designz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-icon-box"
                        >
                            <FaInstagram className="footer-icon" />
                        </a>

                        <div className="footer-icon-box"><FaTwitter className="footer-icon" /></div>
                    </div>
                </div>

                {/* Contact */}
                <div className="footer-column">
                    <h3 className="footer-heading">Contact</h3>
                    <p>Drape Designs</p>
                    <p>arafashionstore12@gmail.com</p>
                    <p>+91 98470 75514</p>
                </div>

                {/* Main Menu */}
                <div className="footer-column">
                    <h3 className="footer-heading">Main Menu</h3>
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/about-us" className="footer-link">About Us</Link>
                    <Link to="/clothing-store" className="footer-link">Clothing</Link>
                    <a
                        href="https://wa.me/919847075514?text=Hi%20Drape%20Designs%2C%20I'm%20interested%20in%20your%20collection!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Contact Us
                    </a>
                </div>

                {/* Expandable Policies */}
                <div className="footer-column">
                    <h3 className="footer-heading">Links</h3>

                    {/* Return Policy */}
                    <div className="footer-policy-section">
                        <div className="footer-policy-header" onClick={() => togglePolicy('return')}>
                            <span className="footer-link">Return Policy</span>
                            {activePolicy === 'return' ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activePolicy === 'return' && (
                            <div className="footer-policy-content" style={{ whiteSpace: 'pre-line' }}>
                                {`We want you to love what you wear!
If you’re not completely satisfied with your purchase, you may request a return or exchange within 3 days of delivery. We will not be able to address any concerns beyond this period, as it allows us to process any claims efficiently and resolve issues promptly. If someone else is collecting the orders on behalf of our NRI customers, it is their responsibility to check for damages and report to us within 7 days. This ensures that any discrepancies are addressed within a reasonable time frame. Please note that NO complaints will be entertained after this period.

Conditions for Return:
• Items must be unused, unwashed, and in original condition with tags intact.
• Returns are accepted only for damaged items.
  For any damage issues, please record an unedited video of the parcel opening at the time of receipt and inform us immediately via WhatsApp at +918590071126. Only then will we accept returns and proceed with further procedures.
• Customized or altered products are not eligible for return or exchange.

How to Request a Return:
Kindly email or WhatsApp us with your order ID and reason for return and the open parcel video. Our team will guide you through the process.

Note:
Return shipping costs will be borne by the customer even if the item received is damaged or incorrect.`}
                            </div>
                        )}
                    </div>

                    {/* Shipping Policy */}
                    <div className="footer-policy-section">
                        <div className="footer-policy-header" onClick={() => togglePolicy('shipping')}>
                            <span className="footer-link">Shipping Policy</span>
                            {activePolicy === 'shipping' ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activePolicy === 'shipping' && (
                            <div className="footer-policy-content" style={{ whiteSpace: 'pre-line' }}>
                                {`We ensure your orders are packed with care and delivered on time!

Order Processing Time:
All orders are processed within 15 business days after confirmation.

Shipping Timeline:
• Standard Delivery: 15 business days (within India)
• Express Delivery: Available on request (additional charges apply)

Delivery Partners:
We ship via trusted courier services to ensure safe and timely delivery.

Shipping Charges:
• Free shipping on orders above ₹2,000
• ₹80–₹120 shipping fee for orders below ₹2,000 (based on location)

Tracking & Support:
You’ll receive a tracking link once your order is dispatched.
For any shipping-related queries, feel free to contact us via WhatsApp or email.`}
                            </div>
                        )}
                    </div>

                    {/* Privacy Policy */}
                    <div className="footer-policy-section">
                        <div className="footer-policy-header" onClick={() => togglePolicy('privacy')}>
                            <span className="footer-link">Privacy Policy</span>
                            {activePolicy === 'privacy' ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activePolicy === 'privacy' && (
                            <div className="footer-policy-content" style={{ whiteSpace: 'pre-line' }}>
                                {`Your privacy is important to us, and we are committed to protecting your personal information.

What We Collect:
We collect basic details such as your name, contact number, email address, and shipping address when you place an order or contact us.

How We Use Your Information:
• To process and deliver your orders
• To provide order updates and customer support
• To inform you about offers, new arrivals, or boutique updates (only if you opt-in)

We Do Not:
- Sell, rent, or share your personal information with third parties
- Store any payment information like card or UPI details

Your Rights:
You can contact us anytime to update or delete your information.

Secure Shopping:
All personal data shared with us is kept confidential and used solely for boutique-related purposes.`}
                            </div>
                        )}
                    </div>

                    {/* Terms & Conditions */}
                    <div className="footer-policy-section">
                        <div className="footer-policy-header" onClick={() => togglePolicy('terms')}>
                            <span className="footer-link">Terms & Conditions</span>
                            {activePolicy === 'terms' ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {activePolicy === 'terms' && (
                            <div className="footer-policy-content" style={{ whiteSpace: 'pre-line' }}>
                                {`By placing an order with us, you agree to the following terms:

1. Order Confirmation
• Orders will be confirmed only after full payment is received.
• Once confirmed, orders cannot be cancelled.

2. Product Information
• We strive to display colors and details as accurately as possible, but slight variations may occur due to lighting or screen settings.
• All product measurements are approximate and may vary slightly.

3. Return & Exchange
• Returns are accepted only for damaged items or incorrect product, as per our return policy.
• Custom or altered pieces are not eligible for return/exchange.

4. Shipping & Delivery
• Delivery timelines are estimates and may vary due to courier delays or unforeseen circumstances.
• We are not responsible for delays once the product is handed over to the courier.

5. Pricing & Payment
• All prices are listed in INR and inclusive of applicable taxes unless stated otherwise.
• We accept payments through secure and trusted gateways only.

6. Use of Content
• All product images and content belong to the boutique. Unauthorized use, copying, or reposting is strictly prohibited.

⸻

For any questions or concerns, please feel free to contact us. We’re here to help!`}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                All Rights Reserved © DRAPE DESIGNS {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default Footer;
