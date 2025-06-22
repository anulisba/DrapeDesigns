import React from 'react';
import Card from './card';
import './TrendingFashion.css';

const products = [
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
        productName: 'Product 1',
        actualPrice: 1999,
        offerPrice: 990,
    },
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
        productName: 'Product 2',
        actualPrice: 1499,
        offerPrice: 890,
    },
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
        productName: 'Product 1',
        actualPrice: 1999,
        offerPrice: 990,
    },
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
        productName: 'Product 2',
        actualPrice: 1499,
        offerPrice: 890,
    },


    // Add more products as needed
];

const ProductGrid = () => {
    return (
        <div className='trending-section'>
            <h2 className='trending-section-h2'>Trending Fashion</h2>
            <div className="trending-product-grid">
                {products.map((prod, idx) => (
                    <Card
                        key={idx}
                        image={prod.image}
                        productName={prod.productName}
                        actualPrice={prod.actualPrice}
                        offerPrice={prod.offerPrice}
                    />
                ))}
            </div>
            <button className="new-arrival-view-more-btn">VIEW MORE</button>
        </div>
    );
};

export default ProductGrid;
