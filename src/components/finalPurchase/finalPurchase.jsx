import React, { useContext, useEffect, useState } from "react";
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

  const [codigo, setCodigo] = useState()

  useEffect(()=>{
    codigoCompra()
  },[])
  
  const codigoCompra = () => {
    let codigo = "";
    const total = 10;
    for (let i = 0; i < total; i++) {
      codigo += Math.floor(Math.random() * 10);
    }
    setCodigo(codigo);
  };
  
  return (
    <div className="finalResumen">
      <figure className="finalResumen__text">
        <img src={check} alt="logo" />
        <p>¡Transacción exitosa!</p>
      </figure>
      <div className="finalResumen__infoBuy">
        <h1>Informacion de compra</h1>
        <span>Facturación</span>
      </div>
      <div className="finalResumen__target">
        <div className="finalResumen__items">
          <label>Código</label>
          <span>#{codigo}</span>
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
