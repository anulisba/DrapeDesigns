import React from 'react';
import Card from '../components/card';
import '../components/TrendingFashion.css';
import products from '../data/products';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const CategoryPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const filteredProducts = products.filter(product =>
        product.categories.some(cat => cat.toLowerCase() === category?.toLowerCase())
    )


    return (
        <>
            <div className='spac-padding'></div>
            <div className='trending-section'>
                <h2 className='trending-section-h2'>{category} Collection</h2>
                {filteredProducts.length > 0 ? (
                    <div className="trending-product-grid">
                        {filteredProducts.map(product => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="no-products-message" style={{ textAlign: 'center', padding: '40px' }}>
                        <p>Stay tuned! We're launching amazing styles in this category soon.</p>
                    </div>
                )}
            </div>
            <div className='spac-padding'></div>
            <Footer />
        </>
    );
};

export default CategoryPage;
