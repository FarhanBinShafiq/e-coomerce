import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeTopBody.css"; 
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from 'react-bootstrap';


const HomeTopBody = () => {
    return (

        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                   
                    <Image src="https://i.ibb.co/3cdBqNN/1.jpg" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <Image src="https://i.ibb.co/pb3SY6Q/2.jpg" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <Image src="https://i.ibb.co/s648RN7/3.jpg" />
                </SwiperSlide>
                

            </Swiper>
        </>

    );
};

export default HomeTopBody;