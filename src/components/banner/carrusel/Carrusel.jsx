import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import { getMovies } from "../../../services/getMovies";
import { endPoints } from "../../../services/data.js";

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
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <img
                className="img"
                src={`${endPoints.urlImage + movie.poster_path}`}
                alt="slide_image"
              />
              <div className="container__div">
                <h3>{movie.title}</h3>
                <span>{`${"titulo en inglés: " + movie.original_title}`}</span>
                <span>{`${"Estreno: " + movie.release_date}`}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
