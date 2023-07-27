import React from 'react'
import './resumenTiket.scss'
import imagen from "../../assets/Rapidos.jpg";

const ResumeTiket = ({calculateTotal}) => {
  return (
    <article className="resumen">
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
          </div>
        </div>
        <p>Se realizará un cargo por servicio por cada boleto dentro de la orden.</p>
        <div className="resumen__value">
          <p>Total (IVA incluido)</p>
          <div className="totalPrice">
            <label>$</label>
            <input
              className="bContainer__amount"
              type="number"
              value={calculateTotal()}
              readOnly
            />
          </div>
        </div>
        <button className="resumen__button" disabled={calculateTotal() === 0}>
          Continuar
        </button>
      </article>
  )
}

export default ResumeTiket