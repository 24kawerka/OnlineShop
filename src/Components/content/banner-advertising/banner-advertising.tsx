import React from 'react'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import banner0 from './../../../Assets/swiper/0.png'
import banner1 from './../../../Assets/swiper/1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import './banner-advertising.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { NavLink } from 'react-router-dom';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const BannerAdvertising = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >    <SwiperSlide className='swiper-slide' >
                    <img src={banner0} alt='0' width='100%' />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' >
                    <NavLink to='/product/9'><img src={banner1} alt='1' width='100%' /></NavLink>
                </SwiperSlide>
            </Swiper >
        </div>
    );
};
export { BannerAdvertising }