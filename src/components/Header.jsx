import { useState } from 'react';
import logo from '../assets/IMG_2964-removebg-preview.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header-component">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className={`header-navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Accessories</li>
                    <li>Clothing</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Header;
