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
        content: "Drape Designs exceeded my expectations! The fabric was luxurious, the fit was perfect, and the attention to detail was amazing. I got so many compliments at the event!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748751402/3d-rendering-luxury-modern-living-room-with-fabric-sofa_uglzwv.jpg"
    },
    {
        name: "Nivin Paul",
        content: "Absolutely loved the ethnic wear collection at Drape Designs. The stitching was flawless and delivery was quick. Will definitely shop again!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/2_xyjpcn.png"
    },
    {
        name: "Sambath",
        content: "I was looking for a classy traditional outfit and Drape Designs delivered just that. Great quality, reasonable pricing, and stunning design!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2185_i2bhiw.jpg"
    },
    {
        name: "Akash",
        content: "I gifted a dress from Drape Designs to my sister and she absolutely loved it! Beautiful packaging and premium quality fabric.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748751683/modern-minimalist-office_2_xxopco.jpg"
    },
    {
        name: "Anu",
        content: "My Drape Designs saree was the highlight of my cousin’s wedding! It looked so elegant and fit like it was custom-made.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2204_xm1wvh.jpg"
    },
    {
        name: "Sreedevi",
        content: "Shopping at Drape Designs was a delightful experience. From fabric to finishing, everything screamed premium. I highly recommend it!",
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

                <h2 className='trending-section-h2' style={{ textAlign: "center" }}
                >Customer Reviews</h2>
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

                <div className="review-rating">
                    {[...Array(5)].map((_, i) => (
                        <MDBIcon key={i} fas icon="star" className="star-icon" />
                    ))}
                </div>
            </div>

            <div className="review-content">
                <div className="review-line"></div>
                <div className="review-text">
                    <MDBIcon fas icon="quote-left" className="quote-icon" />
                    <p>{review.content}</p>
                </div>
            </div>


        </div>
    );
};
