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
  const [disabled, setDisabled] = useState(false);

  //estado del fomulario, captura cada elemento del formulario.
  const [formState, setFormState] = useState({
    email: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  //funcion que captura el evento dentro del formulario.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //esta funcion nos regresa verdadero si todos los campos estan llenos.
  const isFormValid = () => {
    return (
      formState.email.trim() !== "" &&
      formState.cardName.trim() !== "" &&
      formState.cardNumber.trim() !== "" &&
      formState.expiryDate.trim() !== "" &&
      formState.cvv.trim() !== ""
    );
  };

  useEffect(() => {
    const disabledStatus = isFormValid();
    setDisabled(disabledStatus);
    console.log(disabled);
  }, [formState]);

  return (
    <div className="buyT">
      <article className="info">
        <h4>Información personal</h4>
        <p>Completa los datos del formulario para realizar el pago.</p>
        <div className="email">
          <label>Correo electronico</label>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label>Nombre de la tarjeta</label>
          <input
            type="text"
            value={formState.cardName}
            name="cardName"
            onChange={handleChange}
          />
        </div>
        <div className="emailN">
          <label>Numero de la tarjeta</label>
          <div className="emailN__tarjet">
            <input
              className="emailN__number"
              type="text"
              name="cardNumber"
              value={formState.cardNumber}
              onChange={handleChange}
            />
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
              <input
                className="infoT__number"
                type="text"
                name="expiryDate"
                value={formState.expiryDate}
                onChange={handleChange}
              />
              <figure className="">
                <img className="infoT__img" src={down} alt="logo" />
              </figure>
            </div>
          </div>
          <div>
            <label>CVV</label>
            <div className="infoT__tarjet">
              <input
                className="infoT__number"
                type="text"
                name="cvv"
                value={formState.cvv}
                onChange={handleChange}
              />
              <figure className="">
                <img className="infoT__img" src={info} alt="logo" />
              </figure>
            </div>
          </div>
        </div>
      </article>
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
            <p>Número de sala:</p>
            <p>Asientos:</p>
          </div>
        </div>
        <p>
          Se realizara un cargo por servicio por cada boleto dentro de la orden
        </p>
        <div className="resumen__value">
          <p>Total(ivaincluido)</p>
          <div>
            <label>$</label>
            <input className="bContainer__amount" type="number" />
          </div>
        </div>
        <button className="resumen__button" disabled={disabled}>
          Continuar
        </button>
      </article> */}
      <ResumeTiket />
    </div>
  );
};

export default BuyTikecks;
