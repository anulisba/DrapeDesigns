import React from 'react';
import './landing.css';

export default function EidLandingPage() {
    return (
        <div className="eid-landing">
            {/* Banner Section */}
            <div className="banner-container">
                <img
                    src="https://res.cloudinary.com/dpo91btlc/image/upload/v1746857236/Brown_Modern_Minimalist_Eid_Al-Fitr_Fashion_Sale_Promotion_Banner_20250407_221133_0000_nmv5at.jpg"
                    alt="Eid Fashion Sale Banner"
                    className="banner-image"
                />
            </div>

            {/* Scrolling Highlights Section */}
            <div className="highlights-section">
                <hr style={{
                    backgroundColor: "#CFBE8E",
                    border: "none",
                    height: "2px"
                }} />

                <h2 className="highlight-title ">
                    Scrolling text which Highlights about store
                </h2>
                <hr style={{
                    backgroundColor: "#CFBE8E",
                    border: "none",
                    height: "2px"
                }} />
                <div className="category-scroll">
                    {/* Left arrow */}
                    <button className="arrow">&#8592;</button>

                    {/* Category Items */}
                    <div className="category-items">
                        {[
                            { label: 'Neck Pieces', img: '/neckpiece.jpg' },
                            { label: 'Kurtis', img: '/kurti.jpg' },
                            { label: 'Ear Rings', img: '/earrings.jpg' },
                            { label: 'Sarees', img: '/saree.jpg' },
                        ].map((item, index) => (
                            <div key={index} className="category-item">
                                <div className="item-image-wrapper">
                                    <img src={item.img} alt={item.label} className="item-image" />
                                </div>
                                <p className="item-label">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button className="arrow">&#8594;</button>
                </div>
            </div>
        </div>
    );
}
