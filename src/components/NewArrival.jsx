import React from 'react';
import './NewArrival.css';
import pr1 from '../assets/product1.webp';
import pr2 from '../assets/product2.webp';
import pr3 from '../assets/product1.webp';
import pr4 from '../assets/product4.webp';
import pr5 from '../assets/product5.webp';

const newArrivals = [
    { src: pr1, title: 'Necklace' },
    { src: pr2, title: 'Kurta' },
    { src: pr3, title: 'Hand Bag' },
    { src: pr4, title: 'Ear Rings' },
    { src: pr5, title: 'Jewellery Set' },
];

const NewArrival = () => {
    return (
        <div className="new-arrival-section">
            <h2 className="new-arrival-title">New Arrivals</h2>

            <div className="new-arrival-grid-container">
                <div className="new-arrival-grid">
                    <div className="new-arrival-column">
                        <div className="new-arrival-card new-arrival-square">
                            <img src={newArrivals[0].src} alt={newArrivals[0].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[0].title}</p>
                            </div>
                        </div>
                        <div className="new-arrival-card new-arrival-square">
                            <img src={newArrivals[3].src} alt={newArrivals[3].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[3].title}</p>
                            </div>
                        </div>
                    </div>

                    <div className="new-arrival-column new-arrival-tall">
                        <div className="new-arrival-card new-arrival-full">
                            <img src={newArrivals[1].src} alt={newArrivals[1].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[1].title}</p>
                            </div>
                        </div>
                    </div>

                    <div className="new-arrival-column">
                        <div className="new-arrival-card new-arrival-square">
                            <img src={newArrivals[2].src} alt={newArrivals[2].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[2].title}</p>
                            </div>
                        </div>
                        <div className="new-arrival-card new-arrival-square">
                            <img src={newArrivals[4].src} alt={newArrivals[4].title} />
                            <div className="new-arrival-hover-label">
                                <p>{newArrivals[4].title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="new-arrival-view-more-btn">VIEW MORE</button>
        </div>
    );
};

export default NewArrival;