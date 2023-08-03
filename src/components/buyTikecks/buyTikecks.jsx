import React, { useEffect, useState } from "react";
import "./buyTikecks.scss";
import visa from "../../assets/visa.svg";
import master from "../../assets/master.svg";
import amex from "../../assets/amex.svg";
import down from "../../assets/down.svg";
import info from "../../assets/info.svg";
import imagen from "../../assets/Rapidos.jpg";
import ResumeTiket from "../resumenTiket/resumeTiket";

const BuyTikecks = () => {
  return (
    <div className="buyT">
      <article className="info">
        <h4>Información personal</h4>
        <p>Completa los datos del formulario para realizar el pago.</p>
        <div className="email">
          <label>Correo electronico</label>
          <input type="text" name="email" />
        </div>
        <div className="email">
          <label>Nombre de la tarjeta</label>
          <input type="text" />
        </div>
        <div className="emailN">
          <label>Numero de la tarjeta</label>
          <div className="emailN__tarjet">
            <input className="emailN__number" type="text" />
            <figure className="">
              <img className="emailN__img" src={visa} alt="logo" />
              <img className="emailN__img" src={master} alt="logo" />
              <img className="emailN__img" src={amex} alt="logo" />
            </figure>
          </div>
        </div>
        <div className="infoT">
          <div>
            <label>Fecha de caducidad</label>
            <div className="infoT__tarjet">
              <input className="infoT__number" type="text" />
              <figure className="">
                <img className="infoT__img" src={down} alt="logo" />
              </figure>
            </div>
          </div>
          <div>
            <label>CVV</label>
            <div className="infoT__tarjet">
              <input className="infoT__number" type="text" />
              <figure className="">
                <img className="infoT__img" src={info} alt="logo" />
              </figure>
            </div>
          </div>
        </div>
      </article>
      <ResumeTiket />
    </div>
  );
};

export default BuyTikecks;
