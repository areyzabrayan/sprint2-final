import React from "react";
import Form from "react-bootstrap/Form";
import "./cine.scss";

const Cine = () => {
  return (
    <div>
      <h2 className="nameCinemas">Cines cercanos</h2>
      <Form.Select className="cinemas">
        <option>Seleccione uno</option>
        <option value="1">este </option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </div>
  );
};

export default Cine;
