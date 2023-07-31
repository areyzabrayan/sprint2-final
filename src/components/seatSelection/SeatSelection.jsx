import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
//import React from "react";
import ResumeTiket from "../resumenTiket/resumeTiket";
import SeatPicker from "react-seat-picker";
import "./SeatSelection.scss";
import sillaIcon from "../../assets/chair.svg";
import { AppContext } from "../router/router";

const SeatSelection = () => {
  const { seatsSelection, setSeatsSelection } = useContext(AppContext);
  const [selected, setSelected] = useState([]);
  const [time, setTime] = useState(0);
  let navigate = useNavigate();
  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      { id: 3, number: "A3" },
      { id: 4, number: "A4" },
      { id: 24, number: "A5" },
      { id: 34, number: "A6" },
      { id: 44, number: "A7" },
      null,
      { id: 54, number: "A8" },
      { id: 5, number: "A9" },
      { id: 6, number: "A10" },
      { id: 7, number: "A11" },
      { id: 8, number: "A11" },
      { id: 9, number: "A13", isReserved: true },
      { id: 10, number: "A14" },
    ],
    [
      { id: 11, number: "B1" },
      { id: 12, number: "B2" },
      { id: 13, number: "B3", isReserved: true },
      { id: 14, number: "B4" },
      { id: 74, number: "B5" },
      { id: 84, number: "B6" },
      { id: 34, number: "B7" },
      null,
      { id: 94, number: "B8" },
      { id: 15, number: "B9" },
      { id: 16, number: "B10" },
      { id: 17, number: "B11" },
      { id: 18, number: "B12" },
      { id: 19, number: "B13" },
      { id: 20, number: "B14" },
    ],
    [
      { id: 21, number: "C1" },
      { id: 22, number: "C2" },
      { id: 23, number: "C3" },
      { id: 24, number: "C4" },
      { id: 29, number: "C5" },
      { id: 20, number: "C6" },
      { id: 99, number: "C7" },
      null,
      { id: 98, number: "C8" },
      { id: 25, number: "C9" },
      { id: 26, number: "C10" },
      { id: 27, number: "C11", isReserved: true },
      { id: 28, number: "C12" },
      { id: 29, number: "C13" },
      null,
    ],
    [
      { id: 11, number: "D1" },
      { id: 12, number: "D2" },
      { id: 13, number: "D3", isReserved: true },
      { id: 14, number: "D4" },
      { id: 74, number: "D5" },
      { id: 84, number: "D6" },
      { id: 34, number: "D7" },
      null,
      { id: 94, number: "D8" },
      { id: 15, number: "D9" },
      { id: 16, number: "D10" },
      { id: 17, number: "D11" },
      { id: 18, number: "D12" },
      { id: 19, number: "D13" },
    ],
    [
      { id: 11, number: "E1" },
      { id: 12, number: "E2" },
      { id: 13, number: "E3" },
      { id: 14, number: "E4" },
      { id: 74, number: "E5" },
      { id: 84, number: "E6" },
      { id: 34, number: "E7" },
      null,
      { id: 94, number: "E8" },
      { id: 15, number: "E9" },
      { id: 16, number: "E10" },
      { id: 17, number: "E11" },
      { id: 18, number: "E12" },
      { id: 19, number: "E13" },
      { id: 20, number: "E14" },
    ],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      { id: 14, number: "F1" },
      { id: 15, number: "F2" },
      { id: 16, number: "F3" },
      { id: 17, number: "F4" },
      { id: 18, number: "F5" },
      { id: 19, number: "F6" },
    ],
    [
      { id: 11, number: "G1" },
      { id: 12, number: "G2" },
      { id: 13, number: "G3" },
      { id: 14, number: "G4" },
      { id: 74, number: "G5" },
      { id: 84, number: "G6" },
      { id: 34, number: "G7", isReserved: true },
      null,
      { id: 94, number: "G8" },
      { id: 15, number: "G9" },
      { id: 16, number: "G10" },
      { id: 17, number: "G11" },
      { id: 18, number: "G12" },
      { id: 19, number: "G13" },
      { id: 20, number: "G14" },
    ],
    [
      { id: 11, number: "H1" },
      { id: 12, number: "H2" },
      { id: 13, number: "H3" },
      { id: 14, number: "H4" },
      { id: 74, number: "H5" },
      { id: 84, number: "H6" },
      { id: 34, number: "H7", isReserved: true },
      null,
      { id: 94, number: "H8" },
      { id: 15, number: "H9" },
      { id: 16, number: "H10" },
      { id: 17, number: "H11" },
      { id: 18, number: "H12" },
      { id: 19, number: "H13" },
      { id: 20, number: "H14" },
    ],
    [
      { id: 11, number: "I1" },
      { id: 12, number: "I2" },
      { id: 13, number: "I3" },
      { id: 14, number: "I4" },
      { id: 74, number: "I5" },
      { id: 84, number: "I6" },
      { id: 34, number: "I7", isReserved: true },
      null,
      { id: 94, number: "I8" },
      { id: 15, number: "I9" },
      { id: 16, number: "I10" },
      { id: 17, number: "I11" },
      { id: 18, number: "I12" },
      { id: 19, number: "I13" },
      { id: 20, number: "I14" },
    ],
  ];
  const price = 30;
  const totalprice = price * selected.length;
  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSeatsSelection((prevItems) => [...prevItems, number]);
    setSelected((prevItems) => [...prevItems, number]);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSeatsSelection((list) => list.filter((item) => item !== number));
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  const selecSeats = () => {
    setSeatsSelection(selected);
  };

  return (
    <div className="seatSelecion__container">
      <div className="seats">
        <div className="screens">
          <h2>Seleciona tus asientos</h2>
          <p>Para cambiar tu lugar asignado da click en el asiento deseado</p>
          <div className="divDipo">
            <span className="seleccionado">Selecion</span>
            <span className="ocupado">Ocupado</span>
            <span className="disponible">Disponible</span>
          </div>
        </div>

        <SeatPicker
          addSeatCallback={addSeatCallback}
          removeSeatCallback={removeSeatCallback}
          rows={rows}
          alpha
          maxReservableSeats={10}
          visible
        />
        {selected.length !== 0 ? (
          <>
            <div className="seat-price">
              <div className="seat-select">
                <h1 className="seats-select">SEAT:{selected.toString()}</h1>
              </div>
              <div className="totalprice">
                <h1 className="price">
                  price:{"$"}
                  {totalprice}
                </h1>
              </div>
            </div>
            <button
              className="continue"
              onClick={() => navigate(`/Final/${selected}/${totalprice}`)}
            >
              continue
            </button>
          </>
        ) : null}
      </div>

      <ResumeTiket className="resume__seats" />
    </div>
  );
};

export default SeatSelection;
