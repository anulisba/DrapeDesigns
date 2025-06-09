import React from 'react';
import './clothing.css';
import CategoryPageCarousel from '../components/CategoryPageItem';
import ClothingPageProduct from '../components/ClothingPageItems';
import Footer from '../components/Footer';

export default function ClothingStore() {
    return (
        <div className='clothing-store'>
            <div className="banner-container">
                <img
                    src="https://res.cloudinary.com/dpo91btlc/image/upload/v1746857236/Brown_Modern_Minimalist_Eid_Al-Fitr_Fashion_Sale_Promotion_Banner_20250407_221133_0000_nmv5at.jpg"
                    alt="Eid Fashion Sale Banner"
                    className="banner-image"
                />
            </div>
            <h2>Fashion Store</h2>
            <CategoryPageCarousel />
            <ClothingPageProduct />
            <Footer />
        </div>
    )
}