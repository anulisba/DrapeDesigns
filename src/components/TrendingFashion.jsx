import React from 'react';
import Card from './card';
import products from '../data/products';
import './TrendingFashion.css';

const ProductGrid = () => {
    // Filter products: must be in both 'accessories' and 'trending' categories
    const trendingAccessories = products.filter(product =>
        product.categories.includes('accessories') &&
        product.categories.includes('trending')
    );

    return (
        <div className='trending-section'>
            <h2 className='trending-section-h2'>Trending Fashion</h2> {/* Updated title */}
            <div className="trending-product-grid">
                {trendingAccessories.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
            <button className="new-arrival-view-more-btn">VIEW MORE</button>
        </div>
    );
};
export default ProductGrid;
