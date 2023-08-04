import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
//import React from "react";
import ResumeTiket from "../resumenTiket/resumeTiket";
import SeatPicker from "react-seat-picker";
import "./SeatSelection.scss";
import { AppContext } from "../router/router";

const SeatSelection = () => {
  const {
    seatsSelection,
    setSeatsSelection,
    selectedCinemaRooms,
    totaltickets,
  } = useContext(AppContext);
  const [selected, setSelected] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [time, setTime] = useState(0);
  let navigate = useNavigate();

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
          rows={selectedCinemaRooms}
          alpha
          maxReservableSeats={totaltickets}
          visible
        />
      </div>

      <ResumeTiket className="resume__seats" />
    </div>
  );
};

export default SeatSelection;
