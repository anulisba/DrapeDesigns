import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import './ProductDetailPage.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CustomerReviews from '../components/CsutomerReviewCard';
import ProductGrid from '../components/TrendingFashion';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [measurements, setMeasurements] = useState({
        bust: '',
        waist: '',
        hip: '',
        length: ''
    });

    if (!product) return <div>Product not found</div>;

    const handleThumbnailClick = (index) => setMainImageIndex(index);
    const handleNextImage = () => setMainImageIndex((prev) => (prev + 1) % product.images.length);
    const handlePrevImage = () => setMainImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

    const handleVariantClick = (variantProductId) => {
        setMainImageIndex(0)
        navigate(`/product/${variantProductId}`);
    };

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    const handleMeasurementChange = (e) => {
        setMeasurements(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleBuyNow = () => {
        const msg = `
*Hi there is a booking from website, Here are the details*
*Product Name:* ${product.productName}
*Size:* ${selectedSize || 'Not selected'}
*Quantity:* ${quantity}
*Bust:* ${measurements.bust}
*Waist:* ${measurements.waist}
*Hip:* ${measurements.hip}
*Length:* ${measurements.length}
*Price:* ₹${product.offerPrice}
*Image:* ${product.images[mainImageIndex]}
        `;

        const encodedMsg = encodeURIComponent(msg);
        const whatsappURL = `https://wa.me/919847075514?text=${encodedMsg}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className='detail-page'>
            <div className="detail-page-container">
                <div className="detail-page-left-section">
                    <div className="detail-page-thumbnails">
                        {product.images.map((img, index) => (
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
                        <div className="main-image-color-label-below">


                            <img src={product.images[mainImageIndex]} alt="Main Product" className="detail-page-main-image" />
                            <p>Color: {product.color}</p>
                        </div>
                        <button className="detail-page-arrow left" onClick={handlePrevImage}><FaChevronLeft /></button>
                        <button className="detail-page-arrow right" onClick={handleNextImage}><FaChevronRight /></button>

                    </div>
                </div>

                <div className="detail-page-color-variants-mobile">
                    <h4 className="color-variants-heading">Available Colors</h4>
                    <div className="color-variants-container">
                        {product?.images?.[0] ? (
                            <img
                                src={product.images[0]}
                                alt="Current Color"
                                className="color-variant-img current"
                            />
                        ) : (
                            <p className="no-image">No main image available</p>
                        )}

                        {Array.isArray(product?.colorVariants) && product.colorVariants.length > 0 ? (
                            product.colorVariants.map((variant, index) => (
                                <img
                                    key={index}
                                    src={variant.image || "/fallback-image.png"}
                                    alt={`Color ${variant.color || "N/A"}`}
                                    className="color-variant-img"
                                    onClick={() => handleVariantClick(variant.productId)}
                                />
                            ))
                        ) : (
                            <p className="no-variants"></p>
                        )}
                    </div>
                </div>
                <div className="detail-page-right-section">
                    <p className="detail-page-brand">
                        {product.brand}
                        <span className="detail-page-badge">{product.discountPercentage}%</span>
                    </p>
                    <h2 className="detail-page-product-name">{product.productName}</h2>
                    <p className="detail-page-price">
                        <span className="detail-page-original-price">₹{product.actualPrice}</span>
                        ₹{product.offerPrice}
                    </p>
                    <p className="detail-page-description">{product.description}</p>
                    <div className="detail-page-size-section">
                        <p>Size Chart</p>
                        <div className="detail-page-sizes">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    className={`detail-page-size-btn ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="detail-page-quantity-section">
                        <p>Quantity</p>
                        <div className="detail-page-quantity-control">
                            <button onClick={() => handleQuantityChange(-1)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                    </div>
                    <div className="detail-page-measurements">
                        <p>Body measurements for selected size. (Optional)</p>
                        <div className="detail-page-input-group">
                            <input type="text" placeholder="Bust (In Inches)" name="bust" value={measurements.bust} onChange={handleMeasurementChange} />
                            <input type="text" placeholder="Waist (In Inches)" name="waist" value={measurements.waist} onChange={handleMeasurementChange} />
                        </div>
                        <div className="detail-page-input-group">
                            <input type="text" placeholder="Hip (In Inches)" name="hip" value={measurements.hip} onChange={handleMeasurementChange} />
                            <input type="text" placeholder="Length (In Inches)" name="length" value={measurements.length} onChange={handleMeasurementChange} />
                        </div>
                    </div>
                    <button className="detail-page-buy-btn" onClick={handleBuyNow}>Buy Now</button>
                </div>
            </div>
            <div className="detail-page-color-variants-desktop">
                <h4 className="color-variants-heading">Available Colors</h4>
                {product?.images?.[0] || (Array.isArray(product?.colorVariants) && product.colorVariants.length > 0) ? (
                    <div className="color-variants-container">
                        {product?.images?.[0] && (
                            <img
                                src={product.images[0]}
                                alt="Current Color"
                                className="color-variant-img current"
                            />
                        )}
                        {Array.isArray(product?.colorVariants) && product.colorVariants.length > 0 &&
                            product.colorVariants.map((variant, index) => (
                                <img
                                    key={index}
                                    src={variant?.image || "/fallback-image.png"}
                                    alt={`Color ${variant?.color || "N/A"}`}
                                    className="color-variant-img"
                                    onClick={() => handleVariantClick(variant?.productId)}
                                />
                            ))
                        }
                    </div>
                ) : null}
            </div>
            <div className='product-extra-desc'>
                <h4>Material Description</h4>
                <p>{product.materialDescription}</p>
            </div>

            <div className='product-extra-desc'>
                <h4>Shipping Policy</h4>
                <p>{product.shippingPolicy}</p>
            </div>

            <CustomerReviews />
            <ProductGrid />
            <div className='spac-padding'></div>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
