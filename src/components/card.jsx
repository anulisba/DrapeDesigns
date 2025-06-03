import React from 'react';
import './card.css';
const Card = ({ image, productName, actualPrice, offerPrice }) => {
    return (
        <div className="card">
            <img src={image} alt={productName} className="card-image" />
            <div className="card-details">
                <p className="product-name">{productName}</p>
                <div className="price-section">
                    <span className="actual-price">₹{actualPrice}</span>
                    <span className="offer-price">₹{offerPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
