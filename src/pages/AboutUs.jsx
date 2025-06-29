import React from 'react';
import './AboutUs.css';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <>
            <div className="banner-container">
                <img
                    src="https://res.cloudinary.com/dpo91btlc/image/upload/v1746857236/Brown_Modern_Minimalist_Eid_Al-Fitr_Fashion_Sale_Promotion_Banner_20250407_221133_0000_nmv5at.jpg"
                    alt="Eid Fashion Sale Banner"
                    className="banner-image"
                />
            </div>
            <section className="about-section">

                <div className="about-container">
                    <h2 className="about-title">About Drape Designs</h2>
                    <div className="about-content">
                        <p>
                            At <strong>Drape Designs</strong>, we believe fashion is an expression of individuality and culture. Founded with a passion for fine craftsmanship and timeless aesthetics, our mission is to bring elegance and tradition together in every piece we create.
                        </p>
                        <p>
                            From handpicked fabrics to precision tailoring, each design is thoughtfully created to elevate your wardrobe. Whether it's everyday elegance or statement ethnic wear, Drape Designs delivers comfort, quality, and style for every occasion.
                        </p>
                        <p>
                            Our collections are a celebration of India’s rich textile heritage, blended with contemporary flair — designed for modern women who carry confidence with grace.
                        </p>
                        <p className="signature">— The Drape Designs Team</p>
                    </div>
                    <div className="about-image-container">
                        <img
                            src="https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_x2r7gq.jpg"
                            alt="Drape Designs Clothing"
                            className="about-image"
                        />
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
};

export default AboutUs;
