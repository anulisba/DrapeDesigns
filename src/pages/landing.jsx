import React, { useEffect, useRef, useState } from 'react';
import './landing.css';
import NewArrival from '../components/NewArrival';
import ProductGrid from '../components/TrendingFashion';
import CategoryCarousel from '../components/CategoryCaurosel';
import QualitySection from '../components/QualitySection';
import TrendingAccesories from '../components/TrendingAccessories';
import CustomerReviews from '../components/CsutomerReviewCard';
import Footer from '../components/Footer';


export default function EidLandingPage() {
    // Scrolling text sentences
    const sentences = [
        "Free shipping on orders over $50",
        "New arrivals every week",
        "Eid special discounts up to 50%",
        "Handcrafted with love"
    ];

    // State for carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    // Auto-scroll effect
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sentences.length);
        }, 3000);

        return () => clearInterval(intervalRef.current);
    }, [sentences.length]);

    return (
        <div className="eid-landing">
            {/* Responsive Banner */}
            <div className="banner-container">
                <img
                    src="https://res.cloudinary.com/dpo91btlc/image/upload/v1746857236/Brown_Modern_Minimalist_Eid_Al-Fitr_Fashion_Sale_Promotion_Banner_20250407_221133_0000_nmv5at.jpg"
                    alt="Eid Fashion Sale Banner"
                    className="banner-image"
                />
            </div>

            {/* Auto-scrolling Text Carousel */}
            <div className="highlights-section">
                <div className="separator-line" />

                <div className="carousel-container">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {sentences.map((sentence, index) => (
                            <div key={index} className="carousel-slide">
                                <p className="carousel-text">{sentence}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="separator-line" />
                <div className="category-scroll">
                    <CategoryCarousel />
                </div>
            </div>
            <NewArrival />
            <QualitySection />
            <ProductGrid />
            <div className="ad-container">
                <img
                    src="https://res.cloudinary.com/dpo91btlc/image/upload/v1746857236/Brown_Modern_Minimalist_Eid_Al-Fitr_Fashion_Sale_Promotion_Banner_20250407_221133_0000_nmv5at.jpg"
                    alt="Eid Fashion Sale Banner"
                    className="ad-image"
                />
            </div>
            <TrendingAccesories />
            <CustomerReviews />
            <Footer />
        </div>
    );
}
