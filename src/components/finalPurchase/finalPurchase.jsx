import React, { useContext } from "react";
import check from "../../assets/check.svg";
import imagen from "../../assets/Rapidos.jpg";
import "./finalPurchase.scss";
import ResumeTiket from "../resumenTiket/resumeTiket";
import { AppContext } from "../router/router";
import { formateDate } from "../../utils/formatDate";


const FinalPurchase = () => {
  const date = new Date()
  const printDate = formateDate(date)
  const { totalAmount, selectedMovieId, newFormatted,  } = useContext(AppContext);
  
  
  
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
          <span>#{selectedMovieId}</span>
        </div>
        <div className="finalResumen__items">
          <label>Fecha</label>
          <span>{printDate}</span>
        </div>
        <div className="finalResumen__items">
          <label>Total</label>
          <span>${totalAmount}.000</span>
        </div>
        <div className="finalResumen__items">
          <label>metodo de pago</label>
          <span>Tarjeta de credito</span>
        </div>
      </div>
      <div className="boxFinal">
        <ResumeTiket />
      </div>
    </div>
  );
};

export default FinalPurchase;
