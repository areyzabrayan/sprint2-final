import React, { useContext } from "react";
import check from "../../assets/check.svg";
import imagen from "../../assets/Rapidos.jpg";
import "./finalPurchase.scss";
import ResumeTiket from "../resumenTiket/resumeTiket";
import { AppContext } from "../router/router";

const FinalPurchase = () => {
  const { totalAmount } = useContext(AppContext);
  return (
    <div className="finalResumen">
      <figure className="finalResumen__text">
        <img src={check} alt="logo" />
        <figcaption>
          <p>¡Transacción exitosa!</p>
        </figcaption>
      </figure>
      <div className="finalResumen__infoBuy">
        <h1>Informacion de compra</h1>
        <span>Facturación</span>
      </div>
      <div className="finalResumen__target">
        <div className="finalResumen__items">
          <label>Código</label>
          <span>#1346546544</span>
        </div>
        <div className="finalResumen__items">
          <label>Fecha</label>
          <span>jul 07, 2023</span>
        </div>
        <div className="finalResumen__items">
          <label>Total</label>
          <span>${totalAmount}.000</span>
        </div>
        <div className="finalResumen__items">
          <label>metodo de pago</label>
          <span>#1346546544</span>
        </div>
      </div>
      <div className="boxFinal">
        {/* <article className="resumen">
          <h2>Resumen de la compra</h2>
          <div className="resumen__datos">
            <figure className="resumen__img">
              <img src={imagen} alt="imagen" />
            </figure>
            <div className="resumen__titles">
              <p>Pelicula:</p>
              <p>Teatro:</p>
              <p>Fecha:</p>
              <p>Funcion:</p>
              <p>Boletos:</p>
              <p>Numero de sala:</p>
              <p>Asientos:</p>
            </div>
          </div>
          <button className="finalPur">Descargar boletos</button>
        </article> */}
        <ResumeTiket />
      </div>
    </div>
  );
};

export default FinalPurchase;
