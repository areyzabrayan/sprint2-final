import React, { useContext } from "react";
import "./categories.scss";
import { AppContext } from "../../router/router";

const Categories = () => {
  const { setCategory } = useContext(AppContext);

  const handleClick = (itemCategory) => {
    setCategory(itemCategory);
  };

  return (
    <div className="buttons">
      <button onClick={() => handleClick("Acción")}>Accion</button>
      <button onClick={() => handleClick("Terror")}>Terror</button>
      <button
        className="buttons__large"
        onClick={() => handleClick("Ciencia ficción")}
      >
        Ciencia Ficción
      </button>
      <button onClick={() => handleClick("Comedia")}>Comedia</button>
    </div>
  );
};

export default Categories;
