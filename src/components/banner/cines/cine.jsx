import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./cine.scss";
import { useContext, useEffect } from "react";
import { AppContext } from "../../router/router";
import { getCinema } from "../../../services/getCinema";
import { useLocation } from "react-router-dom";

const Cine = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const path = segments[segments.length - 1];
  const [isButtonEnabled, setIsButtonEnabled] = useState(true); // estado apra desabilitar fecha y cines
  const {
    cinemas,
    setCinemas,
    selectedCinema,
    setSelectedCinema,
    setSelectedCinemaName,
    setSelectedCinemaRooms,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCinema();
      setCinemas(data);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const selectedId = event.target.value;
    setSelectedCinema(selectedId);
    // Buscar la película seleccionada por su id en la lista de cines
    const selectedCinema = cinemas.find((cinema) => cinema.id == selectedId);
    // Si se encuentra el cine, actualizar el estado con su nombre
    if (selectedCinema) {
      setSelectedCinemaName(selectedCinema.name);
      setSelectedCinemaRooms(selectedCinema.room);
    } else {
      setSelectedCinemaName("");
      setSelectedCinemaName([]);
    }
  };

  useEffect(() => {
    if (path !== "home") {
      setIsButtonEnabled(false);
    } else {
      setIsButtonEnabled(true);
    }
  }, [path]);

  return (
    <div>
      <h1 className="nameCinemas">Cines cercanos</h1>

      <Form.Select
        className="cinemas"
        value={selectedCinema}
        onChange={handleChange}
        disabled={!isButtonEnabled}
      >
        <option>Seleccione uno</option>
        {cinemas.map((cinema, index) => (
          <option key={index} value={cinema.id} id={cinema.name}>
            {cinema.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Cine;
