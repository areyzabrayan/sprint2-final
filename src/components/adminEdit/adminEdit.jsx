import React, { useContext, useState } from "react";
import "./adminEdit.scss";
import add from "../../assets/add.svg";
import calendar from "../../assets/calendar.svg";
import editB from "../../assets/edit.svg";
import cancel from "../../assets/cancel.svg";
import { AppContext } from "../router/router";
import { getMovie } from "../../services/getMovie";
import { getVideoMovie } from "../../services/getVideoMovie";
import { postCinema } from "../../services/postCinemas"; // Import the postCinema service
import { useEffect } from "react";
import MenuAcordeon from "../menuAcordeon/MenuAcordeon";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

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
    setCinemas,
  } = useContext(AppContext);

  const [view, setView] = useState(false);

  useEffect(() => {
    getMovie(selectedMovieId).then((response) => {
      setMovie({ ...response });
    });

    getVideoMovie(selectedMovieId).then((response) => {
      setVideoMovie(response.key);
    });
  }, [selectedMovieId, setMovie]);

  const [newTheaterData, setNewTheaterData] = useState({
    name: "",
    numberOfRooms: 0,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedCinemas = [...cinemas];

    const newCinemaData = { ...newTheaterData, room: [...cinemas[0].room] };

    try {
      const isCinemaAdded = await postCinema(newCinemaData);

      if (isCinemaAdded) {
        Swal.fire("Bien Hecho", "Nuevo teatro agregado", "success");

        updatedCinemas.push(newCinemaData);
        setCinemas(updatedCinemas);
        setNewTheaterData({ name: "", numberOfRooms: 0 });
      } else {
        Swal.fire("Ooops", "No se pudo realizar la modificación", "error");
      }
    } catch (error) {
      console.log("Error al comunicarse con el servidor", error);
    }
  };

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
              <figure
                className="funtionE__newTeatro"
                onClick={() => setView(!view)}
              >
                <figcaption>
                  <p>Nuevo Teatro</p>
                </figcaption>
                <img src={add} alt="logo" />
              </figure>
            </div>
            <MenuAcordeon />
          </div>
          <form
            className={`form-addC ${!view && "viewF"} p-5`}
            onSubmit={handleFormSubmit}
          >
            <div className="mb-3">
              <label htmlFor="theaterName" className="form-label">
                Nombre del teatro
              </label>
              <input
                type="text"
                className="form-control"
                id="theaterName"
                value={newTheaterData.name}
                onChange={(e) =>
                  setNewTheaterData({ ...newTheaterData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numberOfRooms" className="form-label">
                Numero de salas
              </label>
              <input
                type="number"
                className="form-control"
                id="numberOfRooms"
                value={newTheaterData.numberOfRooms}
                onChange={(e) =>
                  setNewTheaterData({
                    ...newTheaterData,
                    numberOfRooms: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
