// src/components/Card.jsx
import { Link } from 'react-router-dom';
import './card.css'
const Card = ({ product }) => {
    if (!product || !product.id || !product.images || product.images.length === 0) {
        console.warn("Invalid product data passed to Card:", product);
        return null;
    }

    return (
        <Link to={`/product/${product.id}`} className="card-link">
            <div className="pr-card">
                <img src={product.images[0]} alt={product.productName} className="card-image" />
                <div className="card-details">
                    <p className="product-name">{product.productName}</p>
                    <div className="price-section">
                        <span className="actual-price">₹{product.actualPrice}</span>
                        <span className="offer-price">₹{product.offerPrice}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;