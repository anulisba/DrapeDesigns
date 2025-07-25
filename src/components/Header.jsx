import { useState } from 'react';
import logo from '../assets/IMG_2964-removebg-preview.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleContactUs = () => {
        const msg = `
*Hi Drape Designs, I'm interested in your collection!*
        `;
        const encodedMsg = encodeURIComponent(msg);
        const whatsappURL = `https://wa.me/919847075514?text=${encodedMsg}`;
        window.open(whatsappURL, '_blank');
    }
    return (
        <div className="header-component">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className={`header-navbar ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</li>
                    <li onClick={() => { navigate('/about-us'); setMenuOpen(false); }}>About Us</li>
                    <li onClick={() => { navigate('/clothing-store'); setMenuOpen(false); }}>Clothing</li>
                    <li onClick={() => { handleContactUs(); setMenuOpen(false); }}>Contact Us</li>

                </ul>
            </div>
            <div className={`hamburger-icon ${menuOpen ? 'menu-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Header;