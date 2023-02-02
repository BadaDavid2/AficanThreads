import React from 'react'
import { Autoplay, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import clothImg from './clothImg'
const Clothes = () => {
  return (
    <>
      <section className='cloths-section' id='clothes'>
        <p className='section-header'>Clothes</p>
        <div className="cards">
          <div className="card-container">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
          {
            clothImg.map((ele)=>{
            return   <SwiperSlide className='card' key={ele.id}>
                <img src={`./images/${ele.img}`} alt={ele.img} />
              </SwiperSlide>
            })
          }
          </Swiper>
          </div>
          <div className="text">
          Our clothing line features a wide variety of traditional and modern designs that are inspired by the rich cultural heritage of Africa. From traditional Dashikis and Kente cloths to modern streetwear, we have something for everyone. Our clothing is made from high-quality materials and is designed to last.
          </div>
        </div>
      </section>
    </>
  )
}

export default Clothes
