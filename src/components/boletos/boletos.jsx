
import React, { useState } from "react";
import "./boletos.scss";

import ResumeTiket from "../resumenTiket/resumeTiket";

const Boletos = () => {
  const adultPrice = 15;
  const childrenPrice = 10;
  const seniorPrice = 12;

  const [adultAmount, setAdultAmount] = useState(0);
  const [childrenAmount, setChildrenAmount] = useState(0);
  const [seniorAmount, setSeniorAmount] = useState(0);

  const handleInput = (e, setterFunction) => {
    const value = e.target.value;
    if (/^\d+(\.\d+)?$/.test(value)) {
      setterFunction(parseInt(value));
    }
  };

  const handlePlus = (setterFunction) => {
    setterFunction((prevValue) => prevValue + 1);
  };

  const handleMinus = (setterFunction) => {
    setterFunction((prevValue) => prevValue - 1);
  };

  const calculateTotal = () => {
    const total =
      adultAmount * adultPrice +
      childrenAmount * childrenPrice +
      seniorAmount * seniorPrice;
    return total;
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
            <input
              type="number"
              className="bContainer__amount"
              value={adultPrice}
              readOnly
            />
            <div className="buttonsT">
              <button
                className="buttonsT__minus"
                onClick={() => handleMinus(setAdultAmount)}
              >
                -
              </button>
              <input
                type="number"
                onInput={(e) => handleInput(e, setAdultAmount)}
                placeholder="0"
                value={adultAmount}
              />
              <button
                className="buttonsT__plus"
                onClick={() => handlePlus(setAdultAmount)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="edadTikect">
          <h3 className="edadTikect__mobileN">NIÑOS</h3>
          <div className="bContainer">
            <label>$</label>
            <input
              className="bContainer__amount"
              type="number"
              value={childrenPrice}
              readOnly
            />
            <div className="buttonsT">
              <button
                className="buttonsT__minus"
                onClick={() => handleMinus(setChildrenAmount)}
              >
                -
              </button>
              <input
                type="number"
                onInput={(e) => handleInput(e, setChildrenAmount)}
                placeholder="0"
                value={childrenAmount}
              />
              <button
                className="buttonsT__plus"
                onClick={() => handlePlus(setChildrenAmount)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="edadTikect">
          <h3 className="edadTikect__mobile3">3ra EDAD</h3>
          <div className="bContainer">
            <label>$</label>
            <input
              className="bContainer__amount"
              type="number"
              value={seniorPrice}
              readOnly
            />
            <div className="buttonsT">
              <button
                className="buttonsT__minus"
                onClick={() => handleMinus(setSeniorAmount)}
              >
                -
              </button>
              <input
                type="number"
                onInput={(e) => handleInput(e, setSeniorAmount)}
                placeholder="0"
                value={seniorAmount}
              />
              <button
                className="buttonsT__plus"
                onClick={() => handlePlus(setSeniorAmount)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
      <ResumeTiket calculateTotal={calculateTotal} />
    </div>
  );
};

export default Boletos;

