import React, { useEffect } from "react";
import "./resumenTiket.scss";
import imagen from "../../assets/Rapidos.jpg";
import { useContext } from "react";
import { AppContext } from "../router/router";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResumeTiket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0); // Cantidad de asiento selecionados
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const path = segments[segments.length - 1];
  const {
    movie,
    selectedCinemaName,
    newFormatted,
    selectedButton,
    selectedMovieId,
    totalAmount,
    seatsSelection,
    totaltickets,
  } = useContext(AppContext);

  useEffect(() => {
    setSelectedSeatsCount(seatsSelection.length);
  }, [totalAmount, seatsSelection, path, totaltickets]);

  const [isButtonEnabled, setIsButtonEnabled] = useState(true); // habilita y desabilita el boton.

  useEffect(() => {
    if (
      (path === "boletos" && !totalAmount) ||
      (path === "seating" && selectedSeatsCount !== totaltickets)
    ) {
      setIsButtonEnabled(false);
    } else {
      setIsButtonEnabled(true);
    }
  }, [path, totalAmount, seatsSelection, totaltickets, selectedSeatsCount]);

  const handleClick = () => {
    if (path === "boletos") {
      navigate(`/home/movie/${selectedMovieId}/boletos/seating`);
    }
    if (path === "seating") {
      navigate(`/home/movie/${selectedMovieId}/boletos/seating/form`);
    }
    if (path === "form") {
      navigate(`/home/movie/${selectedMovieId}/boletos/seating/form/purchase`);
    }
    if (path === "purchase") {
      navigate(
        `/home/movie/${selectedMovieId}/boletos/seating/form/purchase/QRTickets`
      );
    }
  };

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
          <p>
            Número de sala: <span>1</span>
          </p>
          {seatsSelection?.length > 0 ? (
            <p>
              Asientos:
              {seatsSelection.map((seats, index) => (
                <span key={index}>{seats},</span>
              ))}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {path !== "purchase" && (
        <p>
          Se realizará un cargo por servicio por cada boleto dentro de la orden.
        </p>
      )}
      {path !== "purchase" ? (
        <div className="resumen__value">
          <p>Total (IVA incluido)</p>
          <div className="totalPrice">
            <label>${totalAmount}.000</label>
          </div>
        </div>
      ) : (
        ""
      )}

      <button
        onClick={handleClick}
        className="resumen__button"
        disabled={!isButtonEnabled}
      >
        {path === "purchase" ? "Descargar ahora" : "Continuar"}
      </button>
    </article>
  );
};

export default ResumeTiket;
