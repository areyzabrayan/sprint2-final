import React, { useState } from "react";
import "./boletos.scss";
import ResumeTiket from "../resumenTiket/resumeTiket";
import { useContext } from "react";
import { AppContext } from "../router/router";
import { useEffect } from "react";

const Boletos = () => {
  const { totalAmount, setTotalAmount } = useContext(AppContext);
  const adultPrice = 15;
  const childrenPrice = 10;
  const seniorPrice = 12;

  const [adultAmount, setAdultAmount] = useState(0);
  const [childrenAmount, setChildrenAmount] = useState(0);
  const [seniorAmount, setSeniorAmount] = useState(0);
  //const [totalAmount, setTotalAmount] = useState("");

  // const handleInput = (e, setterFunction) => {
  //   const value = e.target.value;
  //   if (/^\d+(\.\d+)?$/.test(value)) {
  //     setterFunction(parseInt(value));
  //   }
  // };

  // const handlePlus = (setterFunction) => {
  //   setterFunction((prevValue) => prevValue + 1);
  // };

  // const handleMinus = (setterFunction) => {
  //   setterFunction((prevValue) => prevValue - 1);
  // };

  const calculateTotal = () => {
    const total =
      adultAmount * adultPrice +
      childrenAmount * childrenPrice +
      seniorAmount * seniorPrice;
    return total;
  };

  useEffect(() => {
    const sumaTotal = calculateTotal();
    setTotalAmount(sumaTotal);
    console.log(totalAmount);
  }, [adultAmount, childrenAmount, seniorAmount]);

  const handlePlus = (setterFunction) => {
    setterFunction((prevValue) => prevValue + 1);
  };

  const handleMinus = (setterFunction, currentValue) => {
    if (currentValue > 0) {
      setterFunction((prevValue) => prevValue - 1);
    }
  };

  return (
    <div className="selection">
      <article className="boletos">
        <h4>Selecciona tus boletos</h4>
        <p>Puedes comprar 10 boletos maximos por transaccion.</p>
        <div className="edadTikect">
          <h3>ADULTOS</h3>
          <div className="bContainer">
            <label>${adultPrice}.000</label>
            {/* <input
              type="number"
              className="bContainer__amount"
              value={adultPrice}
              readOnly
            /> */}
            <div className="buttonsT">
              <button
                className="buttonsT__minus"
                onClick={() => handleMinus(setAdultAmount, adultAmount)}
              >
                -
              </button>
              <span className="totalboleto">{adultAmount}</span>
              {/* <input
                type="number"
                onInput={(e) => handleInput(e, setAdultAmount)}
                placeholder="0"
                value={adultAmount}
              /> */}
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
            <label>${childrenPrice}.000</label>
            {/* <input
              className="bContainer__amount"
              type="number"
              value={childrenPrice}
              readOnly
            /> */}
            <div className="buttonsT">
              <button
                className="buttonsT__minus"
                onClick={() => handleMinus(setChildrenAmount, childrenAmount)}
              >
                -
              </button>
              <span className="totalboleto">{childrenAmount}</span>
              {/* <input
                type="number"
                onInput={(e) => handleInput(e, setChildrenAmount)}
                placeholder="0"
                value={childrenAmount}
              /> */}
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
            <label>${seniorPrice}.000</label>
            {/* <input
              className="bContainer__amount"
              type="number"
              value={seniorPrice}
              readOnly
            /> */}
            <div className="buttonsT">
              <button
                className="buttonsT__minus"
                onClick={() => handleMinus(setSeniorAmount, seniorAmount)}
              >
                -
              </button>
              <span className="totalboleto">{seniorAmount}</span>
              {/* <input
                type="number"
                onInput={(e) => handleInput(e, setSeniorAmount)}
                placeholder="0"
                value={seniorAmount}
              /> */}
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
      <ResumeTiket className="section_dos" />
    </div>
  );
};

export default Boletos;

//actualizacion
