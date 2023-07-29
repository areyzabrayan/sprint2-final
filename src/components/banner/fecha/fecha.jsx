import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./fecha.scss";
import { AppContext } from "../../router/router";
import es from "date-fns/locale/es";
import { getFunctions } from "../../../services/getFunctions";
import Swal from "sweetalert2";

const Fecha = () => {
  const {
    setseletDay,
    selectedCinema,
    date,
    setdate,
    selectedDate,
    setSelectedDate,
  } = useContext(AppContext);

  const adjustedDates =
    date.dates?.map((dateStr) => {
      const originalDate = new Date(dateStr);
      return originalDate.toISOString().slice(0, 10);
    }) || [];

  const adjustedDate =
    date.dates?.map((dateStr) => {
      const originalDate = new Date(dateStr);
      originalDate.setDate(originalDate.getDate() + 1);
      return originalDate.toISOString().slice(0, 10);
    }) || [];

  useEffect(() => {
    getFunctions(selectedCinema).then((response) => {
      setdate({ ...response });
      setseletDay("");
    });
    setSelectedDate(null);
  }, [selectedCinema]);

  useEffect(() => {
    if (selectedDate) {
      const dataIdeal = selectedDate.toISOString().slice(0, 10);
      setseletDay(dataIdeal);

      const dateFound = adjustedDates.includes(dataIdeal);
      if (dateFound) {
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "En esta fecha no tenemos función, selecciona una fecha válida",
        }).then(() => {
          setSelectedDate(null);
          setseletDay("");
        });
      }
    }
  }, [selectedDate, adjustedDates]);

  const handleClick = (data) => {
    setSelectedDate(data);
  };

  const isDateDisabled = (date) => {
    return date > new Date();
  };

  return (
    <div className="calendar-container fechas-container">
      <h1>Fecha</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(data) => handleClick(data)}
        filterDate={isDateDisabled}
        highlightDates={adjustedDate.map((dateStr) => new Date(dateStr))}
        calendarClassName="custom-datepicker"
        dateFormat="d 'de' MMMM"
        locale={es}
        placeholderText="Selecciona una fecha"
      />
    </div>
  );
};

export default Fecha;
