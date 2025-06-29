import { useState } from 'react';
import logo from '../assets/IMG_2964-removebg-preview.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="header-component">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className={`header-navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li>About Us</li>
                    <li onClick={() => navigate('/clothing-store')}>Clothing</li>
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