import React from 'react';
import './landing.css';
import NewArrival from '../components/NewArrival';
import ProductGrid from '../components/TrendingFashion';
import CategoryCarousel from '../components/CategoryCaurosel';
import QualitySection from '../components/QualitySection';
import TrendingAccesories from '../components/TrendingAccessories';
import CustomerReviews from '../components/CsutomerReviewCard';
import Footer from '../components/Footer';
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
