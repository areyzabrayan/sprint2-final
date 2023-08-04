import React, { useContext, useEffect, useState } from "react";
import "./movie.scss";
import { getMovie } from "../../services/getMovie";
import { useLocation } from "react-router";
import { endPoints } from "../../data/data";
import { getVideoMovie } from "../../services/getVideoMovie";
import { AppContext } from "../router/router";
import { getFunctions } from "../../services/getFunctions";
import { format } from "date-fns";
import esLocale from "date-fns/locale/es";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  //const [movie, setMovie] = useState([]);

  const location = useLocation();
  const {
    selectedCinema,
    selectedId,
    date,
    seletDay,
    selectedButton,
    setSelectedButton,
    selectedCinemaName,
    selectedMovieId,
    movie,
    setMovie,
    newFormatted,
    setNewFormatted,
    setTotalAmount,
    videoMovie,
    setVideoMovie,
  } = useContext(AppContext);
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedButton(null);
  }, [selectedCinema]);

  useEffect(() => {
    getMovie(id).then((response) => {
      setMovie({ ...response });
    });

    getVideoMovie(id).then((response) => {
      setVideoMovie(response.key);
    });
  }, [id, setMovie]);

  const getYearFromDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.getFullYear();
  };

  const formattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return format(date, "d 'de' MMMM", { locale: esLocale });
  };

  useEffect(() => {
    if (seletDay) {
      const date = new Date(seletDay);
      date.setDate(date.getDate() + 1); // Sumar un día
      const formatted = formattedDate(date);
      setNewFormatted(formatted);
      console.log(formatted);
    }
  }, [seletDay]);

  const handleButtonClick = (hora) => {
    setSelectedButton(hora);
  };

  return (
    <>
      <div>
        <div className="container__Movie">
          <div className="container__detail">
            <figure>
              <img src={movie.image} alt="" />
            </figure>
            <div className="description">
              <h2>{movie.name}</h2>
              <span>
                {movie.originalTitle} ({getYearFromDate(movie.releaseDate)})
              </span>
              <div className="buttonsContainer">
                <button className="b1 mobile-button1">
                  {movie.adult ? "Adultos" : "A"}
                </button>
                <button className="b2 mobile-button">
                  {movie.runTime} min
                </button>
                <button className="b3 ">
                  {movie.gender ? movie.gender.join(", ") : ""}
                </button>
              </div>
              <div className="trailer">
                <h2>Trailer</h2>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoMovie}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h2>Sinopsis</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
          <div className="container__showTime">
            <h2>Horarios disponibles - {newFormatted}</h2>
            <span className="span1">Elije el horario que prefieras</span>
            <span className="span2">{selectedCinemaName}</span>
            {date.horaFuncion && date.horaFuncion.length > 0 ? (
              <div>
                {date.horaFuncion.map((hora, index) => (
                  <button
                    className={hora === selectedButton ? "colorcito" : ""}
                    key={index}
                    onClick={() => handleButtonClick(hora)}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            ) : (
              <p>No hay horarios disponibles.</p>
            )}
            <button
              className={selectedButton ? "onselec" : ""}
              onClick={() => navigate(`/movie/${selectedMovieId}/boletos`)}
              disabled={!selectedButton}
            >
              Seleccionar boletos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
//updae
