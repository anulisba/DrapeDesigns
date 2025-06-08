import React from 'react';
import { FaHands, FaCreditCard, FaGem } from 'react-icons/fa';
import './QualitySection.css';

const QualitySection = () => {
    return (
        <div className="quality-section">
            <div className="quality-box">
                <div className="quality-icon">
                    <FaHands className="icon" />
                </div>
                <div className="quality-text">
                    <span className="quality-title">Handcrafted</span>
                    <span className="quality-subtitle">Excellence</span>
                </div>
            </div>

            <div className="quality-box">
                <div className="quality-icon">
                    <FaCreditCard className="icon" />
                </div>
                <div className="quality-text">
                    <span className="quality-title">Flexible</span>
                    <span className="quality-subtitle">Payment Methods</span>
                </div>
            </div>

            <div className="quality-box">
                <div className="quality-icon">
                    <FaGem className="icon" />
                </div>
                <div className="quality-text">
                    <span className="quality-title">Premium</span>
                    <span className="quality-subtitle">Materials</span>
                </div>
            </div>
        </div>
    );
};

export default QualitySection;