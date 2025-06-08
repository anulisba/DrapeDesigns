// import React, { useEffect, useState, useRef } from 'react';
// import './CustomerReviewCard.css';
// import { FaStar } from 'react-icons/fa';

// const items = [
//     {
//         id: 1,
//         img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
//         text: 'Excellent stitching and fabric quality. Worth the money. Entire fits perfectly with a finishing touch.',
//     },
//     {
//         id: 2,
//         img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
//         text: 'The fabric is luxurious and fits beautifully. Fast delivery too!',
//     },
//     {
//         id: 3,
//         img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
//         text: 'Super satisfied with the design and comfort. Will buy again!',
//     },
//     {
//         id: 4,
//         img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
//         text: 'Great customer service and premium quality. Highly recommend.',
//     },
//     {
//         id: 5,
//         img: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1748968758/product5_qlt5vk.jpg',
//         text: 'Loved the finishing and elegance. A must-have collection!',
//     },
// ];

// const CustomerReviewCard = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [slidesToShow, setSlidesToShow] = useState(3);
//     const [transitionEnabled, setTransitionEnabled] = useState(true);
//     const trackRef = useRef(null);

//     // Handle window resize for responsiveness
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1200) setSlidesToShow(3);
//             else if (window.innerWidth >= 768) setSlidesToShow(2);
//             else setSlidesToShow(1);
//         };
//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // Create circular item array with duplicates
//     const circularItems = useRef([
//         ...items.slice(items.length - slidesToShow),
//         ...items,
//         ...items.slice(0, slidesToShow)
//     ]);

//     // Auto-advance slides
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex(prev => {
//                 const nextIndex = prev + 1;
//                 if (nextIndex >= items.length + slidesToShow) {
//                     setTransitionEnabled(false);
//                     return slidesToShow;
//                 }
//                 return nextIndex;
//             });
//         }, 3000);
//         return () => clearInterval(interval);
//     }, [slidesToShow]);

//     // Re-enable transitions after reset
//     useEffect(() => {
//         if (!transitionEnabled) {
//             const timer = setTimeout(() => {
//                 setTransitionEnabled(true);
//             }, 50);
//             return () => clearTimeout(timer);
//         }
//     }, [transitionEnabled]);

//     // Update circular items when slidesToShow changes
//     useEffect(() => {
//         circularItems.current = [
//             ...items.slice(items.length - slidesToShow),
//             ...items,
//             ...items.slice(0, slidesToShow)
//         ];
//     }, [slidesToShow]);

//     return (
//         <div className="review-carousel-wrapper">
//             <div
//                 className="review-carousel-track"
//                 ref={trackRef}
//                 style={{
//                     transform: `translateX(${-currentIndex * (100 / slidesToShow)}%)`,
//                     transition: transitionEnabled ? 'transform 0.5s ease' : 'none'
//                 }}
//             >
//                 {circularItems.current.map((item, index) => (
//                     <div
//                         key={`${item.id}-${index}`}
//                         className="review-card"
//                         style={{ width: `${100 / slidesToShow}%` }}
//                     >
//                         <img src={item.img} alt="Customer" className="review-img" />
//                         <div className="review-stars">
//                             {[...Array(5)].map((_, i) => (
//                                 <FaStar key={i} className="star-icon" />
//                             ))}
//                         </div>
//                         <p className="review-text">{item.text}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CustomerReviewCard;
import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import "./CustomerReviewCard.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
    {
        name: "Alen Alex",
        location: "Kakkanad, Kerala",
        content: "Abhi's Planet completely reimagined our 3BHK flat. From layout optimization to premium finishes, everything was executed with precision. The result is a sophisticated home we love coming back to.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748751402/3d-rendering-luxury-modern-living-room-with-fabric-sofa_uglzwv.jpg"
    },
    {
        name: "Nivin Paul",
        location: "Kakkanad, Kerala",
        content: "We wanted a stylish yet functional makeover for our apartment, and Abhi’s Planet nailed it. Great eye for detail and thoughtful use of space — exceeded our expectations!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/2_xyjpcn.png"
    },
    {
        name: "Sambath",
        location: "Vayttila, Kerala",
        content: "Our compact flat was redesigned into a spacious, vibrant living area. The interiors now reflect our personality, and guests always compliment the decor. Fantastic work!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2185_i2bhiw.jpg"
    },
    {
        name: "Akash",
        location: "Thrissur, Kerala",
        content: "We entrusted Abhi’s Planet with our standalone residence renovation. Their ability to blend modern aesthetics with traditional charm was impressive. It truly feels like home now.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748751683/modern-minimalist-office_2_xxopco.jpg"
    },
    {
        name: "Anu",
        location: "Calicut, Kerala",
        content: "Abhi’s Planet handled our residential project with creativity and care. Every room reflects our lifestyle. It’s elegant, functional, and feels uniquely ours.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2204_xm1wvh.jpg"
    },
    {
        name: "Sreedevi",
        location: "Alappuzha, Kerala",
        content: "Choosing Abhi’s Planet for our home interiors was the best decision we made. They brought warmth, elegance, and practicality to every room. The attention to detail truly made our house a home.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2195_x9p40b.jpg"
    }

];


// Split reviews into chunks of 3 for desktop carousel
const desktopReviews = [];
for (let i = 0; i < reviews.length; i += 2) {
    desktopReviews.push(reviews.slice(i, i + 2));
}

export default function CustomerReviews() {
    return (
        <section className="reviews-section">
            <MDBContainer className="py-0">
                <div className="our-services-header">
                    <div className='our-service-title'>
                        <h2>What Our Clients Say<br />About Us</h2><div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">CUSTOMER REVIEWS</span>
                    </div>

                </div>

                {/* <p className="section-description">
                    Discover why clients trust us to transform their spaces into extraordinary environments
                </p> */}
                {/* Desktop Carousel (3 reviews per slide) */}
                <div className="d-none d-lg-block">
                    <MDBCarousel
                        showControls={false}
                        showIndicators={false}
                        interval={2000}
                        ride="carousel"
                        className="reviews-carousel"
                    >
                        {desktopReviews.map((reviewGroup, index) => (
                            <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                                <MDBRow>
                                    {reviewGroup.map((review, idx) => (
                                        <MDBCol sm="6" key={idx} >
                                            <ReviewCard review={review} />
                                        </MDBCol>
                                    ))}
                                </MDBRow>
                            </MDBCarouselItem>
                        ))}

                    </MDBCarousel>
                    {/* <button className="custom-arrow left" >
                        <FaChevronLeft />
                    </button>
                    <button className="custom-arrow right" >
                        <FaChevronRight />
                    </button> */}

                </div>

                {/* Mobile Carousel (1 review per slide) */}
                <div className="d-lg-none">
                    <MDBCarousel
                        showControls={false}
                        showIndicators={false}
                        interval={3000}
                        ride="carousel"
                        className="reviews-carousel"
                    >
                        {reviews.map((review, index) => (
                            <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                                <MDBRow className="justify-content-center">
                                    <MDBCol sm="10" md="8">
                                        <ReviewCard review={review} />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCarouselItem>
                        ))}
                    </MDBCarousel>
                    {/* <button className="custom-arrow left" >
                        <MDBIcon fas icon="chevron-left" />
                    </button>
                    <button className="custom-arrow right" >
                        <MDBIcon fas icon="chevron-right" />
                    </button> */}
                </div>

            </MDBContainer>
        </section>
    );
}

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <div className="review-header">
                <img
                    src={review.avatar}
                    className="review-avatar"
                    alt={review.name}
                />
                <div className="review-titles">
                    <h5 className="review-name">{review.name}</h5>
                    <h6 className="review-role">{review.location}</h6>
                </div>
            </div>

            <div className="review-content">
                <div className="review-line"></div>
                <div className="review-text">
                    <MDBIcon fas icon="quote-left" className="quote-icon" />
                    <p>{review.content}</p>
                </div>
            </div>

            <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                    <MDBIcon key={i} fas icon="star" className="star-icon" />
                ))}
            </div>
        </div>
    );
};
