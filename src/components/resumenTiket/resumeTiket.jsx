import React, { useEffect } from "react";
import "./resumenTiket.scss";
import imagen from "../../assets/Rapidos.jpg";
import { useContext } from "react";
import { AppContext } from "../router/router";
import { useNavigate } from "react-router-dom";

const ResumeTiket = () => {
  const {
    movie,
    selectedCinemaName,
    newFormatted,
    selectedButton,
    selectedMovieId,
    totalAmount,
  } = useContext(AppContext);

  useEffect(() => {
    console.log(totalAmount);
  }, [totalAmount]);

  const navigate = useNavigate();

  return (
    <article className="resumen">
      <h2>Resumen de la compra</h2>
      <div className="resumen__datos">
        <figure className="resumen__img">
          <img src={movie.image} alt="imagen" />
        </figure>
        <div className="resumen__titles">
          <p>
            Pelicula: <span>{movie.name}</span>
          </p>
          <p>
            Complejo: <span>{selectedCinemaName}</span>
          </p>
          <p>
            Fecha: <span>{newFormatted} del 2023</span>
          </p>
          <p>
            Función: <span>{selectedButton}</span>
          </p>
        </div>
      </div>
      <p>
        Se realizará un cargo por servicio por cada boleto dentro de la orden.
      </p>
      <div className="resumen__value">
        <p>Total (IVA incluido)</p>
        <div className="totalPrice">
          <label>${totalAmount}.000</label>
        </div>
      </div>
      <button
        onClick={() =>
          navigate(`/home/movie/${selectedMovieId}/boletos/seating`)
        }
        className="resumen__button"
        disabled={!totalAmount}
      >
        Continuar
      </button>
    </article>
  );
};

export default ResumeTiket;
