import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './CategoryCarousel.css';
import ct1 from '../assets/category1.webp';
import ct2 from '../assets/category2.png';

const items = [
    { label: 'Neck Pieces', img: ct1 },
    { label: 'Kurtis', img: ct2 },
    { label: 'Ear Rings', img: ct1 },
    { label: 'Sarees', img: ct2 },
    { label: 'Bangles', img: ct1 },
    { label: 'Lehengas', img: ct2 },
    { label: 'Anklets', img: ct1 },
];

const CategoryCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

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
            <button className="carousel-arrow left" onClick={prevSlide}>&#8592;</button>

            <div className="carousel-viewport">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(${-currentSlide * (100 / slidesToShow)}%)`,
                        transition: transitionEnabled ? 'transform 0.5s ease' : 'none'
                    }}
                >
                    {circularItems.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item"
                            style={{ width: `${100 / slidesToShow}%` }}
                        >
                            <div className="item-image-wrapper">
                                <div className="item-image-wrapper2">
                                    <img src={item.img} alt={item.label} className="item-image" />
                                </div>
                            </div>
                            <p className="item-label">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button className="carousel-arrow right" onClick={nextSlide}>&#8594;</button>
        </div>
    );
};

export default CategoryCarousel;