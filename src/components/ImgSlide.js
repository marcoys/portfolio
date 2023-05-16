import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

function ImgSlide({imageTitle}) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper2">
        {
          imageTitle.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={`${process.env.PUBLIC_URL}/images/${item}.gif`} alt="" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}

export default ImgSlide