import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import './ChatRoom.css'
import "swiper/css";
import "swiper/css/navigation";



const ChatRooms = () => {

    const chatRooms = [
        { img: "user2.jpg", name: "Sara's Room", status: "online" },
        { img: "user3.jpg", name: "jawad's Room", status: "offline" },
        { img: "user4.jpg", name: "Jack's Room", status: "away" },
        { img: "user5.jpg", name: "jobidn's Room", status: "online" },
        { img: "user6.jpg", name: "Emily's Room", status: "offline" },
    ];
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            autoplay={{
                delay: 4000000,
                disableOnInteraction: false,
            }}
            loop={true}
        >
            {chatRooms.map((room, index) => (
                <SwiperSlide key={index}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: "1px solid #eee",
                            borderRadius: "8px",
                            padding: "15px 8px",
                            background: "#fff",
                        }}
                    >
                        <div style={{ position: "relative", marginBottom: "8px" }}>
                            <img
                                src={`images/resources/${room.img}`}
                                alt={room.name}
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />

                            {/* status indicator */}
                            <span
                                style={{
                                    position: "absolute",
                                    bottom: "2px",
                                    left: "2px",
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background:
                                        room.status === "online"
                                            ? "green"
                                            : room.status === "away"
                                                ? "orange"
                                                : "gray",
                                }}
                            ></span>
                        </div>

                        <span style={{ fontSize: "13px", fontWeight: "500" }}>
                            {room.name}
                        </span>
                        <div style={{ display: "flex", gap: "6px", alignItems: "center", marginTop: '10px' }}>
                            <a className="join" href="#" style={{ fontSize: "12px", padding: "2px 10px" }}>Join</a>
                            <a className="say-hi send-mesg" href="#"><i className="icofont-facebook-messenger"></i></a>
                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ChatRooms;