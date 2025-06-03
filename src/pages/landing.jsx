import React from 'react';
import './landing.css';
import ct1 from '../assets/category1.webp';
import ct2 from '../assets/category2.png';
import NewArrival from '../components/NewArrival';
import ProductGrid from '../components/TrendingFashion';
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
                            { label: 'Neck Pieces', img: ct1 },
                            { label: 'Kurtis', img: ct2 },
                            { label: 'Ear Rings', img: ct1 },
                            { label: 'Sarees', img: ct2 },
                        ].map((item, index) => (
                            <div key={index} className="category-item">
                                <div className="item-image-wrapper">
                                    <div className="item-image-wrapper2">
                                        <img src={item.img} alt={item.label} className="item-image" />
                                    </div>
                                </div>
                                <p className="item-label">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button className="arrow">&#8594;</button>
                </div>
            </div>
            <NewArrival />
            <ProductGrid />
        </div>
    );
}
