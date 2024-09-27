import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import four from './assets/four.jpg'
import  five from './assets/five.jpg'
import six from './assets/six.jpg'
import seven from './assets/seven.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Sliding.css'

const Sliding = () => {
  
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
        <SwiperSlide >
          <img src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      
    </div>
  )
}

export default Sliding

