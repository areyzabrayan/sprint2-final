import React, { useContext, useEffect} from "react";
import { AppContext } from "../router/router";
import "./buytikecks.scss";
import visa from "../../assets/visa.svg";
import master from "../../assets/master.svg";
import amex from "../../assets/amex.svg";
import down from "../../assets/down.svg";
import info from "../../assets/info.svg";
import ResumeTiket from "../resumenTiket/resumeTiket";


const BuyTikecks = () => {
  const { disabled, setDisabled, formState, setFormState} = useContext(AppContext);
  
  
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
      <form  className="info">
        <h4>Información personal</h4>
        <p>Completa los datos del formulario para realizar el pago.</p>
        <div className="email">
          <label>Correo electronico</label>
          <input type="text" onChange={handleChange} value={formState.email} name="email"
          />
        </div>
        <div className="email">
          <label>Nombre de la tarjeta</label>
          <input type="text" onChange={handleChange} value={formState.cardName} name="cardName"

          />
        </div>
        <div className="emailN">
          <label>Numero de la tarjeta</label>
          <div className="emailN__tarjet">
            <input className="emailN__number" type="text" onChange={handleChange} value={formState.cardNumber} name="cardNumber"
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
                onChange={handleChange} value={formState.expiryDate} name="expiryDate"
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
                onChange={handleChange}  value={formState.cvv} name="cvv"
              />
              <figure className="">
                <img className="infoT__img" src={info} alt="logo" />
              </figure>
            </div>
          </div>
        </div>
       {
        alert.message && (
          <div className={`alert ${alert.type}`}>
          {alert.message}
        </div>
        )
       }
      </form>
      <ResumeTiket  />
    </div>
  );
};

export default BuyTikecks;