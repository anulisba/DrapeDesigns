import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './CategoryCarousel.css';

const items = [
    { label: 'Ethnic Wear', img: "https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg" },
    { label: 'Semi-Formal', img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_x2r7gq.jpg' },
    { label: 'Casual Wear', img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709712/1AF07137-B737-45E4-ABD5-E7C04CF19F37_jzpd7s.jpg' },
    { label: 'Festive Wear', img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709712/34E7F1D3-5896-4A11-890A-E16FF938F610_lqwgd3.jpg' },
    { label: 'Formal Wear', img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709711/2CB806AB-D87C-495F-B4F5-8510C35D8F99_ehbpvx.jpg' },
];

const CategoryPageCarousel = () => {
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
                        >
                            <div className="cc-item-image-wrapper">

                                <img src={item.img} alt={item.label} className="cc-item-image" />

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

export default CategoryPageCarousel;