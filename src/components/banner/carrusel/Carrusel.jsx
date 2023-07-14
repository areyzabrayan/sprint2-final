import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "./carrusel.scss";
import "swiper/scss";
import "swiper/scss/effect-coverflow";

const slide_image_1 =
  "https://raw.githubusercontent.com/emetdas/Youtube-code/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/assets/images/img_1.jpg";
const slide_image_2 =
  "https://raw.githubusercontent.com/emetdas/Youtube-code/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/assets/images/img_2.jpg";
const slide_image_3 =
  "https://raw.githubusercontent.com/emetdas/Youtube-code/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/assets/images/img_3.jpg";
const slide_image_4 =
  "https://raw.githubusercontent.com/emetdas/Youtube-code/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/assets/images/img_4.jpg";
const slide_image_5 =
  "https://raw.githubusercontent.com/emetdas/Youtube-code/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/assets/images/img_5.jpg";
const slide_image_6 =
  "https://raw.githubusercontent.com/emetdas/Youtube-code/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/assets/images/img_6.jpg";
const slide_image_7 =
  "https://raw.githubusercontent.com/emetdas/Youtube-code/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/src/assets/images/img_7.jpg";

const Carrusel = () => {
  return (
    <>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
