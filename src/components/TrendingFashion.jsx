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
        </div>
    );
};

export default ProductGrid;
