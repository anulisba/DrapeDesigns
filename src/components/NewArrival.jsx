import React from 'react';
import './NewArrival.css';
import { useNavigate } from 'react-router-dom';

const newArrivals = [
    { src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg", title: 'Haldi Hues', product: 1 },
    { src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/8A31DB5B-D967-4E8D-BB9C-FC4A18183A5B_utdtug.jpg", title: 'Petal Whispers', product: 6 },
    { src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_x2r7gq.jpg", title: 'Peach Glow', product: 2 },
    { src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/FAE55202-BD22-436A-AC45-97D131289D87_rnxv0p.jpg", title: 'Pink Aura', product: 7 },
    { src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg", title: 'Pink Bloom', product: 3 },
];

const NewArrival = () => {
    const navigate = useNavigate();
    const handleNavigateToProduct = (id) => {
        navigate(`/product/${id}`);
    };
    const handleViewMore = () => {
        navigate('/category-page?category=Kurtis');
    };
    return (
        <div className="new-arrival-section">
            <h2 className="new-arrival-title">New Arrivals</h2>

            <div className="new-arrival-grid-container">
                <div className="new-arrival-grid">
                    <div className="new-arrival-column">
                        <div className="new-arrival-card new-arrival-square" onClick={() => handleNavigateToProduct(newArrivals[0].product)}>
                            <img src={newArrivals[0].src} alt={newArrivals[0].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[0].title}</p>
                            </div>
                        </div>
                        <div className="new-arrival-card new-arrival-square" onClick={() => handleNavigateToProduct(newArrivals[3].product)}>
                            <img src={newArrivals[3].src} alt={newArrivals[3].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[3].title}</p>
                            </div>
                        </div>
                    </div>

                    <div className="new-arrival-column new-arrival-tall" onClick={() => handleNavigateToProduct(newArrivals[1].product)}>
                        <div className="new-arrival-card new-arrival-full">
                            <img src={newArrivals[1].src} alt={newArrivals[1].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[1].title}</p>
                            </div>
                        </div>
                    </div>

                    <div className="new-arrival-column">
                        <div className="new-arrival-card new-arrival-square" onClick={() => handleNavigateToProduct(newArrivals[2].product)}>
                            <img src={newArrivals[2].src} alt={newArrivals[2].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[2].title}</p>
                            </div>
                        </div>
                        <div className="new-arrival-card new-arrival-square" onClick={() => handleNavigateToProduct(newArrivals[4].product)}>
                            <img src={newArrivals[4].src} alt={newArrivals[4].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[4].title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="new-arrival-view-more-btn" onClick={handleViewMore}>VIEW MORE</button>
        </div>
    );
};

export default NewArrival;