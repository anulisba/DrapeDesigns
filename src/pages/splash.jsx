import React, { useEffect } from 'react';
import './Splash.css';
import logo from '../assets/IMG_2964-removebg-preview.png'
const Splash = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="splash-screen">
            <div className="splash-logo-container">
                <svg className="golden-ring" viewBox="0 0 100 100">
                    <circle
                        className="ring-path"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#6a4d1c"
                        strokeWidth="1"
                    />
                </svg>
                <img src={logo} alt="Logo" className="splash-logo" />
            </div>
        </div>
    );
};

export default Splash;
