import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getMovies } from "../../../services/getMovies";
import { AppContext } from "../../router/router";
import { getMovie } from "../../../services/getMovie";

const Carrusel = () => {
  const [movies, setMovies] = useState([]);
  const { cards } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getMovies();
    const list = [];

    for (let i = 0; i < data.length; i++) {
      const detailMovie = await getMovie(data[i].id);
      list.push(detailMovie);
    }
    setMovies(list);
  };

  return (
    <div className="container1">
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
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="swiper_container"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <img className="img" src={movie.image} alt="slide_image" />
            <div className="container__div">
              <h2 className="card__es">{movie.name}</h2>
              <h3 className="card__en">
                Titulo en original: {movie.originalTitle}
              </h3>
              <div className="details__movie">
                <span>Estreno: {movie.releaseDate}</span>
                <span>Genero: {movie.gender.map((item) => ` ${item}`)}</span>
              </div>
              <div className="otra0">
                <span className="otra">
                  {movie.adult ? "Adultos" : "Todo publico"}
                </span>
                <span className="otra">{movie.runTime} Min</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
