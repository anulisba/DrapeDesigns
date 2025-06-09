// ProductDetailPage.jsx
import React, { useState } from 'react';
import './ProductDetailPage.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CustomerReviews from '../components/CsutomerReviewCard';
import ProductGrid from '../components/TrendingFashion';
import Footer from '../components/Footer';

const sampleImages = [
    'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
    'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
    'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
    'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
];

const ProductDetailPage = () => {
    const [mainImageIndex, setMainImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setMainImageIndex(index);
    };

    const handleNextImage = () => {
        setMainImageIndex((prev) => (prev + 1) % sampleImages.length);
    };

    const handlePrevImage = () => {
        setMainImageIndex((prev) => (prev - 1 + sampleImages.length) % sampleImages.length);
    };

    return (
        <div className='detail-page'>
            <div className="detail-page-container">
                <div className="detail-page-left-section">
                    <div className="detail-page-thumbnails">
                        {sampleImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className={`detail-page-thumbnail ${index === mainImageIndex ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                    <div className="detail-page-main-image-wrapper">
                        <img
                            src={sampleImages[mainImageIndex]}
                            alt="Main Product"
                            className="detail-page-main-image"
                        />
                        <button className="detail-page-arrow left" onClick={handlePrevImage}>
                            <FaChevronLeft />
                        </button>
                        <button className="detail-page-arrow right" onClick={handleNextImage}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="detail-page-right-section">
                    <p className="detail-page-brand">Drape Designs <span className="detail-page-badge">10%</span></p>
                    <h2 className="detail-page-product-name">Product Name</h2>
                    <p className="detail-page-price">
                        <span className="detail-page-original-price">Rs 1650</span> Rs 999
                    </p>
                    <p className="detail-page-description">
                        This is a traditional saree that requires manual draping. It is recommended for all body types,
                        including pregnant women, who often prefer the flexibility and custom draping of a regular saree.
                    </p>
                    <div className="detail-page-size-section">
                        <p>Size Chart</p>
                        <div className="detail-page-sizes">
                            {['XS', 'S', 'M', 'L', 'XL', '2XL'].map(size => (
                                <button key={size} className="detail-page-size-btn">{size}</button>
                            ))}
                        </div>
                    </div>

                    <div className="detail-page-quantity-section">
                        <p>Quantity</p>
                        <div className="detail-page-quantity-control">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>

                    <div className="detail-page-measurements">
                        <p>Body measurements for selected size. (Optional)</p>
                        <div className="detail-page-input-group">
                            <input type="text" placeholder="Bust (In Inches)" />
                            <input type="text" placeholder="Waist (In Inches)" />
                        </div>
                        <div className="detail-page-input-group">
                            <input type="text" placeholder="Hip (In Inches)" />
                            <input type="text" placeholder="Length (In Inches)" />
                        </div>
                    </div>

                    <button className="detail-page-buy-btn">Buy Now</button>


                </div>

            </div>
            <div className="detail-page-color-variants">
                <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg" alt="Variant 1" />
                <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg" alt="Variant 2" />
                <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg" alt="Variant 3" />
            </div>
            <div className='product-extra-desc'>
                <h4>Material Discription</h4>
                <p>This is a traditional saree that requires manual draping. It is recommended for all body types, including pregnant women, who often prefer the flexibility and custom draping of a regular saree.
                    This is a traditional saree that requires manual draping. It is recommended for all body types, including pregnant women, who often prefer the flexibility and custom draping of a regular saree.</p>
            </div>
            <div className='product-extra-desc'>
                <h4>Shipping Policy</h4>
                <p>This is a traditional saree that requires manual draping. It is recommended for all body types, including pregnant women, who often prefer the flexibility and custom draping of a regular saree.
                    This is a traditional saree that requires manual draping. It is recommended for all body types, including pregnant women, who often prefer the flexibility and custom draping of a regular saree.</p>
            </div>
            <CustomerReviews />
            <ProductGrid />
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
