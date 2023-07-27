import React, { useEffect, useState } from "react";
import "./movie.scss";
import { getMovie } from "../../services/getMovie";
import { useLocation } from "react-router";
import { endPoints } from "../../data/data";
import { getVideoMovie } from "../../services/getVideoMovie";

const Movie = () => {
  const [videoMovie, setVideoMovie] = useState("");
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];

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
  return (
    <>
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
            <div>
              <button className="b1">{movie.adult ? "Adultos" : "A"}</button>
              <button className="b2">{movie.runTime} min</button>
              <button className="b3">
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
          <h2>Horarios disponibles - 07 de julio </h2>
          <span className="span1">Elije el horario que prefieras</span>
          <span className="span2">Marco plaza del Mar</span>
          <div>
            <button>18:00</button>
            <button>19:30</button>
            <button>21:05</button>
          </div>
          <button>Selecionar boletos</button>
        </div>
      </div>
    </>
  );
};

export default Movie;
