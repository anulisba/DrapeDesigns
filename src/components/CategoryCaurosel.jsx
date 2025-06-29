import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './CategoryCarousel.css';
import ct1 from '../assets/category1.webp';
import ct2 from '../assets/category2.png';
import { useNavigate } from 'react-router-dom';

const items = [
    { label: 'Office Kurta', img: ct1 },
    { label: 'Partywear Kurta', img: ct2 },
    { label: 'Casual Kurti', img: ct1 },
    { label: 'Festive Kurta', img: ct2 },
    { label: 'Ethnic Long Kurti', img: ct1 },
    { label: 'Short Printed Kurti', img: ct2 },
];


const CategoryCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const navigate = useNavigate();

    //handle nabogation
    const handleCategoryClick = (label) => {
        navigate(`/category-page?category=${encodeURIComponent(label)}`)
    }
    // Handle window resize for responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) setSlidesToShow(6);
            else if (window.innerWidth >= 768) setSlidesToShow(4);
            else setSlidesToShow(3);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Create circular item array with duplicates
    const circularItems = useMemo(() => {
        return [
            ...items.slice(items.length - slidesToShow),
            ...items,
            ...items.slice(0, slidesToShow)
        ];
    }, [items, slidesToShow]);

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [slidesToShow]);

    // Handle slide transitions
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => {
            const nextSlide = prev + 1;
            // Check if we've reached the end of duplicates
            if (nextSlide >= items.length + slidesToShow) {
                // Disable transition for instant reset
                setTransitionEnabled(false);
                return slidesToShow;
            }
            return nextSlide;
        });
    }, [items.length, slidesToShow]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => {
            const prevSlide = prev - 1;
            // Check if we're at the beginning of duplicates
            if (prevSlide < 0) {
                setTransitionEnabled(false);
                return items.length + slidesToShow - 1;
            }
            return prevSlide;
        });
    }, [items.length, slidesToShow]);

    // Re-enable transitions after reset
    useEffect(() => {
        if (!transitionEnabled) {
            const timer = setTimeout(() => {
                setTransitionEnabled(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [transitionEnabled]);

    return (
        <div className="category-carousel">
            <button className="cc-carousel-arrow left" onClick={prevSlide}>&#8592;</button>

            <div className="cc-carousel-viewport">
                <div
                    className="cc-carousel-track"
                    style={{
                        transform: `translateX(${-currentSlide * (100 / slidesToShow)}%)`,
                        transition: transitionEnabled ? 'transform 0.5s ease' : 'none'
                    }}
                >
                    {circularItems.map((item, index) => (
                        <div
                            key={index}
                            className="cc-carousel-item"
                            style={{ width: `${100 / slidesToShow}%` }}
                            onClick={() => handleCategoryClick(item.label)}
                        >
                            <div className="cc-item-image-wrapper">
                                <div className="cc-item-image-wrapper2">
                                    <img src={item.img} alt={item.label} className="cc-item-image" />
                                </div>
                            </div>
                            <p className="cc-item-label">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button className="cc-carousel-arrow right" onClick={nextSlide}>&#8594;</button>
        </div>
    );
};

export default CategoryCarousel;