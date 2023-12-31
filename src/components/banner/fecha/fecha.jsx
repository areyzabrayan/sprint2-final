import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./fecha.scss";
import { AppContext } from "../../router/router";
import es from "date-fns/locale/es";
import { getFunctions } from "../../../services/getFunctions";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Fecha = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const path = segments[segments.length - 1];
  const [isButtonEnabled, setIsButtonEnabled] = useState(true); // estado apra desabilitar fecha y cines
  const {
    setseletDay,
    selectedCinema,
    date,
    setdate,
    selectedDate,
    setSelectedDate,
    setSelectedId,
  } = useContext(AppContext);

  const adjustedDates =
    date.dates?.map((dateStr) => {
      const originalDate = new Date(dateStr);
      return originalDate.toISOString().slice(0, 10);
    }) || [];

  const addOneDay = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  };

  const adjustedDate = date.dia
    ? [addOneDay(new Date(date.dia).toISOString().slice(0, 10))]
    : [];

  useEffect(() => {
    if (path !== "home") {
      setIsButtonEnabled(false);
    } else {
      setIsButtonEnabled(true);
    }
  }, [path]);

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

      if (!dateFound) {
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

  const handleClick = (date) => {
    setSelectedDate(date);
  };

  const isDateDisabled = (date) => {
    return date > new Date();
  };

  return (
    <div className="calendar-container fechas-container">
      <h1>Fecha</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleClick(date)}
        filterDate={isDateDisabled}
        highlightDates={adjustedDate.map((dateStr) => new Date(dateStr))}
        calendarClassName="custom-datepicker"
        dateFormat="d 'de' MMMM"
        locale={es}
        placeholderText="Selecciona una fecha"
        disabled={!isButtonEnabled}
      />
    </div>
  );
};
//resolve
export default Fecha;
