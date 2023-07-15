import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import { getMovies } from "../../../services/getMovies";
import { API_PATH } from "../../../services/data";

const Carrusel = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getMovies();
    setMovies(data);
    console.log(data);
  };

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
          {movies.map((movie) => (
            <SwiperSlide>
              <img
                key={movie.id}
                src={`${API_PATH + movie.poster_path}`}
                alt="slide_image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
