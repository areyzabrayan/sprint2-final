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

const AdminEdit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { movie, setMovie, videoMovie, setVideoMovie, selectedMovieId } =
    useContext(AppContext);

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
          <h4>Titulo original</h4>
          <p>coco</p>
          <h4>Pais de origen</h4>
          <p>coco</p>
          <h4>Director</h4>
          <p>coco</p>
          <h4>Actores</h4>
          <p>coco</p>
          <h4>Lenduaje</h4>
          <p>coco</p>
        </div>
        <div>
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
            <div className="teatrosE">
              <p>Jose Antonio</p>
              <figure>
                <img onClick={() => setIsOpen(!isOpen)} src={dowm} alt="" />
              </figure>
            </div>
            <div className={`edit-salas ${isOpen && "open"}`}>
              <h1>Sala 1</h1>
              <div>
                <input type="text" value={"1:30 pm"} />
                <input type="text" value={"1:30 pm"} />
                <input type="text" value={"1:30 pm"} />
                <div className="newSala">
                  <h1>Sala 1</h1>
                  <figure className="funtionE__newTeatro">
                    <figcaption>
                      <p>Nueva Hora</p>
                    </figcaption>
                    <img src={add} alt="logo" />
                  </figure>
                </div>
                <div className="containerHours">
                  <div className="hoursE">
                    <div
                      className="hoursE__contienerE"
                      onMouseEnter={() => setHoveredIndex(0)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <input
                        type="text"
                        defaultValue={"1:30 pm"}
                        onChange={(e) => {}}
                      />
                      <div className="iconContainer">
                        <img
                          className={`hoursE__edit ${
                            hoveredIndex === 0 ? "showE" : ""
                          }`}
                          src={editB}
                          alt="edit"
                        />
                        <img
                          className={`hoursE__cancel ${
                            hoveredIndex === 0 ? "showE" : ""
                          }`}
                          src={cancel}
                          alt="cancel"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hoursE">
                    <div
                      className="hoursE__contienerE"
                      onMouseEnter={() => setHoveredIndex(1)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <input
                        type="text"
                        defaultValue={"1:30 pm"}
                        onChange={(e) => {}}
                      />
                      <div className="iconContainer">
                        <img
                          className={`hoursE__edit ${
                            hoveredIndex === 1 ? "showE" : ""
                          }`}
                          src={editB}
                          alt="edit"
                        />
                        <img
                          className={`hoursE__cancel ${
                            hoveredIndex === 1 ? "showE" : ""
                          }`}
                          src={cancel}
                          alt="cancel"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hoursE">
                    <div
                      className="hoursE__contienerE"
                      onMouseEnter={() => setHoveredIndex(2)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <input
                        type="text"
                        defaultValue={"1:30 pm"}
                        onChange={(e) => {}}
                      />
                      <div className="iconContainer">
                        <img
                          className={`hoursE__edit ${
                            hoveredIndex === 2 ? "showE" : ""
                          }`}
                          src={editB}
                          alt="edit"
                        />
                        <img
                          className={`hoursE__cancel ${
                            hoveredIndex === 2 ? "showE" : ""
                          }`}
                          src={cancel}
                          alt="cancel"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`edit-salas ${isOpen && "open"}`}>
                <h1>Sala 2</h1>
                <div>
                  <input type="text" value={"1:30 pm"} />
                  <input type="text" value={"1:30 pm"} />
                  <input type="text" value={"1:30 pm"} />
                </div>
              </div>
              <div className="teatrosE">
                <p>Estelar</p>
                <figure>
                  <img src={dowm} alt="" />
                </figure>
              </div>
              <div className="teatrosE">
                <p>Puerta del Norte</p>
                <figure>
                  <img src={dowm} alt="" />
                </figure>
              </div>
              <input type="text" defaultValue={"1:30 pm"} />
              <input type="text" defaultValue={"1:30 pm"} />
              <input type="text" defaultValue={"1:30 pm"} />
            </div>
          </div>
          {/* Otros elementos */}
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
