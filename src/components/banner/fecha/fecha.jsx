import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./fecha.scss"; // Importamos los estilos personalizados
import { AppContext } from "../../router/router";

const Fecha = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { seletDay, setseletDay } = useContext(AppContext);
  const enabledDates = [
    "2023-08-03",
    "2023-08-02",
    "2023-08-16",
    "2023-08-04",
    "2023-08-20",
  ];

  useEffect(() => {
    if (selectedDate) {
      const dataIdeal = selectedDate.toISOString().slice(0, 10);
      //console.log(selectedDate.toISOString().slice(0, 10));
      setseletDay(dataIdeal);
    }
  }, [selectedDate]);

  useEffect(() => {
    console.log(seletDay);
  }, [seletDay]);

  // useEffect(() => {
  //   // Simulamos la llamada a la API para obtener las fechas habilidatas
  //   // Reemplaza esto con tu solicitud a la API real
  //   const fetchEnabledDates = async () => {
  //     try {
  //       const response = await axios.get("URL_DE_TU_API");
  //       setEnabledDates(response.data); // Suponemos que la API devuelve un array de fechas habilidatas
  //     } catch (error) {
  //       console.error(
  //         "Error al obtener las fechas habilidatas desde la API",
  //         error
  //       );
  //     }
  //   };

  //   fetchEnabledDates();
  // }, []);

  // Ajustar las fechas restando un día
  const adjustedDates = enabledDates.map((dateStr) => {
    const originalDate = new Date(dateStr);
    originalDate.setDate(originalDate.getDate() + 1);
    return originalDate.toISOString().slice(0, 10);
  });

  const handleClick = (date) => {
    setSelectedDate(date);
  };

  const isDateDisabled = (date) => {
    return date > new Date();
  };

  return (
    <div className="calendar-container">
      <h1>Fecha</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleClick(date)}
        filterDate={isDateDisabled}
        highlightDates={adjustedDates.map((dateStr) => new Date(dateStr))}
        calendarClassName="custom-datepicker"
      />
    </div>
  );
};

export default Fecha;
