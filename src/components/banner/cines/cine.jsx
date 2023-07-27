import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./cine.scss";
import { useContext, useEffect } from "react";
import { AppContext } from "../../router/router";
import { getCinema } from "../../../services/getCinema";

const Cine = () => {
  const { cinemas, setCinemas, selectedCinema, setSelectedCinema } =
    useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCinema();
      setCinemas(data);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedCinema(event.target.value);
    console.log("Cinema selected:", event.target.value);
  };

  return (
    <div>
      <h2 className="nameCinemas">Cines cercanos</h2>

      <Form.Select
        className="cinemas"
        value={selectedCinema}
        onChange={handleChange}
      >
        <option>Seleccione uno</option>
        {cinemas.map((cinema, index) => (
          <option key={index} value={cinema.id}>
            {cinema.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Cine;
