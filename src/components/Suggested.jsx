import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Suggested.css";

const suggestedPeople = [
    { img: "speak-1.jpg", name: "Muhammad Khan" },
    { img: "speak-2.jpg", name: "Sadia Gill" },
    { img: "speak-3.jpg", name: "Amy Watson" },
    { img: "speak-2.jpg", name: "Ahmed Hassan" },
];

const Suggested = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="suggested-wrapper">

            {/* Header */}
            <div className="suggested-header">
                <div className="suggest-icon">
                    <i className="icofont-learn"></i>
                </div>
                <div>
                    <h5>Suggested</h5>
                    <span>
                        <i className="icofont-runner-alt-1"></i> Follow Similar People
                    </span>
                </div>
            </div>

            {/* Outer div provides padding for custom arrows */}
            <div className="swiper-outer">

                {/* Custom prev/next buttons inside swiper-outer */}
                <div ref={prevRef} className="swiper-button-prev"></div>
                <div ref={nextRef} className="swiper-button-next"></div>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={false}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        576: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                >
                    {suggestedPeople.map((p, index) => (
                        <SwiperSlide key={index}>
                            <div className="suggest-card">

                                <figure>
                                    <img
                                        src={`images/resources/${p.img}`}
                                        alt={p.name}
                                    />
                                </figure>

                                <span className="suggest-name">{p.name}</span>

                                <span className="department">
                                    Department of Sociology
                                </span>

                                <button className="follow-btn">
                                    <i className="icofont-star"></i> Follow
                                </button>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default Suggested;