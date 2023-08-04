import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../router/router";
import "./card.scss";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Card = () => {
  const { cards, seletDay, setSelectedMovieId } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const path = segments[segments.length - 1];

  const handleClick = (id) => {
    setSelectedMovieId(id);
    if (path == "home" && seletDay) {
      navigate(`/movie/${id}`);
    }
    if (path == "home" && !seletDay) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Dinos cuando quieres ver la pelicula",
      });
    }
    if (path == "private") {
      navigate(`/private/adminEdit`);
    }
  };

  return (
    <>
      {cards.map((data, index) => (
        <div className="principal" key={index}>
          <article className="principal__card">
            <span onClick={() => handleClick(data.id)}>
              <img className="image" src={data.image} />
            </span>
            <div className="card">
              <h2 className="card__title">{data.name}</h2>
              <span className="card__Etitle">
                Titulo en ingles: {data.originalTitle}
              </span>
              <span>Estreno: {data.releaseDate}</span>
              <span>Genero: {data.gender.map((item) => ` ${item}`)}</span>
              <div className="card__endInfo">
                <span className="duration">
                  {data.adult ? "Adultos" : "Todo publico"}
                </span>
                <span className="duration">{data.runTime} Min</span>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Card;
