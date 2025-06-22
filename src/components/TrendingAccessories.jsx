import React from 'react';
import Card from './card';
import './TrendingFashion.css';

const products = [
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_1_wjxegy.jpg',
        productName: 'Product 1',
        actualPrice: 1999,
        offerPrice: 990,
    },
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
        productName: 'Product 2',
        actualPrice: 1499,
        offerPrice: 890,
    },
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_tngayi.jpg',
        productName: 'Product 1',
        actualPrice: 1999,
        offerPrice: 990,
    },
    {
        image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
        productName: 'Product 2',
        actualPrice: 1499,
        offerPrice: 890,
    },


    // Add more products as needed
];

const TrendingAccesories = () => {
    return (
        <div className='trending-section'>
            <h2 className='trending-section-h2'>Top Seller</h2>
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

export default TrendingAccesories;
