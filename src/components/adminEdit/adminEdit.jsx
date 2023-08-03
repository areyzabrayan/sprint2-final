import React, { useContext, useState } from "react";
import "./adminEdit.scss";
import dowm from "../../assets/down.svg";
import add from "../../assets/add.svg";
import calendar from "../../assets/calendar.svg";
import editB from "../../assets/edit.svg";
import cancel from "../../assets/cancel.svg";
import { AppContext } from "../router/router";
import { getMovie } from "../../services/getMovie";
import { getVideoMovie } from "../../services/getVideoMovie";
import { useEffect } from "react";
import MenuAcordeon from "../menuAcordeon/MenuAcordeon";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminEdit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const {
    movie,
    setMovie,
    videoMovie,
    setVideoMovie,
    selectedMovieId,
    cinemas,
  } = useContext(AppContext);

  useEffect(() => {
    console.log("total mundo", selectedMovieId);
  }, [selectedMovieId]);

  useEffect(() => {
    getMovie(selectedMovieId).then((response) => {
      setMovie({ ...response });
    });

    getVideoMovie(selectedMovieId).then((response) => {
      setVideoMovie(response.key);
    });
  }, [selectedMovieId, setMovie]);

  return (
    <div className="container__primary">
      <div className="firstConainer">
        <figure className="firstConainer__imgMovie">
          <img src={movie.image} alt="" />
        </figure>
        <iframe
          className="firstConainer__imgMovie2"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoMovie}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* <figure className="firstConainer__imgMovie2">
          <img
            src="https://isopixel.net/wp-content/uploads/2017/09/Coco-Movie-2017-Trailer-Disney-Pixar.jpg"
            alt=""
          />
        </figure> */}
      </div>
      <div className="editMain">
        <div className="descriptionE">
          <p>{movie.overview}</p>
          <h4>Titulo</h4>
          <p>{movie.name}</p>
          <h4>Titulo original</h4>
          <p>{movie.originalTitle}</p>
          <h4>Estreno</h4>
          <p>{movie.releaseDate}</p>
          <h4>Generos</h4>
          <p> {movie.gender} </p>
          <h4>Duración</h4>
          <p>{movie.runTime} minutos</p>
        </div>
        <div className="container__izquierda">
          <div className="dateE">
            <h2>jul </h2>
            <div className="fechasE">
              <div className="showDate">
                <button>
                  11 <br />
                  MAR
                </button>
                <button>
                  12 <br />
                  MIE
                </button>
                <button>
                  13 <br />
                  JUE
                </button>
                <button>
                  14 <br />
                  SAB
                </button>
                <button>
                  15 <br />
                  DOM
                </button>
              </div>
              <figure className="calender">
                <img src={calendar} alt="calendario" />
              </figure>
            </div>
          </div>
          <div className="funtionE">
            <div className="funtionE__title">
              <h2>Funciones por Teatros</h2>
              <figure className="funtionE__newTeatro">
                <figcaption>
                  <p>Nuevo Teatro</p>
                </figcaption>
                <img src={add} alt="logo" />
              </figure>
            </div>
            <MenuAcordeon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
