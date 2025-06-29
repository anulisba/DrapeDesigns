import React from 'react';
import Card from './card';
import './TrendingFashion.css';
import products from '../data/products';
import { useNavigate } from 'react-router-dom';

const ClothingPageProduct = () => {
    const trendingAccessories = products.filter(product =>
        product.categories.includes('accessories') &&
        product.categories.includes('trending')
    )
        .slice(0, 4);
    const TrendingFashion = products.filter(product =>
        product.categories.includes('accessories') &&
        product.categories.includes('trending')
    );
    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate('/category-page?category=kurtis');
    };

    return (
        <>
            <div className='spac-padding'></div>
            <div className='trending-section'>
                <h2 className='trending-section-h2'>New Arrivals</h2>
                <div className="trending-product-grid">
                    {trendingAccessories.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
                <button className="new-arrival-view-more-btn" onClick={handleViewMore}>VIEW MORE</button>
            </div>
            <div className='spac-padding'></div>
            <div className='trending-section'>
                <h2 className='trending-section-h2'>Trending Fashion</h2>
                <div className="trending-product-grid">
                    {TrendingFashion.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
                <button className="new-arrival-view-more-btn">VIEW MORE</button>
            </div>
            <div className='spac-padding'></div>
            <div className='trending-section'>
                <h2 className='trending-section-h2'>Best Sellers</h2>
                <div className="trending-product-grid">
                    {trendingAccessories.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
                <button className="new-arrival-view-more-btn" onClick={handleViewMore}>VIEW MORE</button>
            </div>
        </>
    );
};

export default ClothingPageProduct;
