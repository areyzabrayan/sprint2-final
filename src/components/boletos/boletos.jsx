import React, { useState } from "react";
import "./boletos.scss";
import imagen from "../../assets/Rapidos.jpg";
const Boletos = () => {
  const [disabled, setDisabled] = useState(true);
  const handleInput = (e) => {
    const value = e.target.value
    if (/^\d+(\.\d+)?$/.test(value)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
  return (
    <div className="selection">
      <article className="boletos">
        <h4>Selecciona tus boletos</h4>
        <p>puedes comprar 10 boletos maximos por transaccion.</p>
        <div className="edadTikect">
          <h3>ADULTOS</h3>
          <div className="bContainer">
            <label>$</label>
            <input className="bContainer__amount" type="number"  />
            <div className="buttonsT">
              <button className="buttonsT__minus">-</button>
              <input type="number" onInput={handleInput} />
              <button className="buttonsT__plus">+</button>
            </div>
          </div>
        </div>
        <div className="edadTikect">
          <h3>NIÑOS</h3>
          <div className="bContainer">
            <label>$</label>
            <input className="bContainer__amount" type="number" />
            <div className="buttonsT">
              <button className="buttonsT__minus">-</button>
              <input type="number" onInput={handleInput}/>
              <button className="buttonsT__plus">+</button>
            </div>
          </div>
        </div>
        <div className="edadTikect">
          <h3>3ra EDAD</h3>
          <div className="bContainer">
            <label>$</label>
            <input className="bContainer__amount" type="number" />
            <div className="buttonsT">
              <button className="buttonsT__minus">-</button>
              <input type="number" onInput={handleInput}/>
              <button className="buttonsT__plus">+</button>
            </div>
          </div>
        </div>
      </article>
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
      </article>
    </div>
  );
};

export default Boletos;
