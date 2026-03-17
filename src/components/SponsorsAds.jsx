import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// import './ChatRoom.css'
import "swiper/css";
import "swiper/css/navigation";
import "./SponsoredSlider.css"



const SponsorsAds = () => {

    const products = [
        { img: "sponsor-prod1.jpg", name: "Aloevera Juice 1 liter", price: "$24" },
        { img: "sponsor-prod5.jpg", name: "Beauty Cosmetics", price: "$24" },
        { img: "sponsor-prod4.jpg", name: "Overtime For Men", price: "$24" },
        { img: "sponsor-prod3.jpg", name: "Redish Baby Items", price: "$24" },
        { img: "sponsor-prod2.jpg", name: "Potato Baby Fider", price: "$24" },
    ];
    return (
        <div className="sponsored-swiper" style={{ marginTop: '20px' }}>






            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={20}
                navigation
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {products.map((prod, i) => (
                    <SwiperSlide key={i}>
                        <div className="sponsor-card">

                            {/* Product Image */}
                            <div className="sponsor-img-wrap">
                                <img
                                    src={`images/resources/${prod.img}`}
                                    alt={prod.name}
                                />
                            </div>

                            {/* Info Row */}
                            <div className="sponsor-info">
                                <span className="sponsor-name">{prod.name}</span>
                                <span className="sponsor-price">{prod.price}</span>
                            </div>

                            {/* Shop Now */}
                            <a href="#" className="shop-btn">Shop Now</a>

                            {/* Stats */}
                            <div className="share-info">
                                <span>50 shares</span>
                                <span>20k Likes</span>
                            </div>

                            {/* Actions */}
                            <div className="sponsor-actions">
                                <button className="action-btn">
                                    <i className="icofont-like"></i> Like
                                </button>
                                <button className="action-btn">
                                    <i className="icofont-share-alt"></i> Share
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SponsorsAds;