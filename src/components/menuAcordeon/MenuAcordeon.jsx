import React, { useState } from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AppContext } from "../router/router";
import "./menuAcordeon.scss";
import iconEdit from "../../assets/edit-icon.svg";
import closeEdit from "../../assets/close-icon.svg";
import { useEffect } from "react";
import { getFunctions } from "../../services/getFunctions";
import EditFuncion from "../editFuncion/EditFuncion";

const MenuAcordeon = () => {
  const { cinemas, setdate, date } = useContext(AppContext);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showEditFuncion, setShowEditFuncion] = useState(false); // Estado para controlar la visibilidad de EditFuncion

  const handleClick = (id) => {
    console.log(id);
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };

  useEffect(() => {
    getFunctions(activeMenu).then((response) => {
      setdate({ ...response });
    });
  }, [activeMenu]);

  const handleEditClick = (e, horaFuncion) => {
    e.stopPropagation();
    console.log("Clic en icono Edit:", horaFuncion);
  };

  const handleNewFuntion = () => {
    console.log("click");
    setShowEditFuncion(!showEditFuncion);
  };
  return (
    <div>
      {cinemas.map((cinema, index) => (
        <Accordion className=" " key={index} defaultActiveKey="0">
          <Accordion.Item
            eventKey={cinema.id.toString()} // Usa el ID del cine como eventKey
            className={`item ${activeMenu === cinema.id ? "active" : ""}`}
          >
            <Accordion.Header onClick={() => handleClick(cinema.id)}>
              <h3 className="acordeon__header">{cinema.name}</h3>
            </Accordion.Header>
            <Accordion.Body>
              <div className="acordeon">
                <section>
                  <div className="acordeon__salasEdit">
                    <h3 className="acordeon__title">Sala 1</h3>
                    <img className="iconEditS" src={iconEdit} alt="iconEdit" />
                    <img
                      className="iconCloseS "
                      src={closeEdit}
                      alt="iconEdit"
                    />
                  </div>
                  {date.horaFuncion1 !== undefined && (
                    <div className="acordeon__hoursEdit">
                      <div className="acordeon__oneHourEdit">
                        <input
                          className="acordeon__Edit"
                          value={date.horaFuncion1}
                        ></input>
                        <img
                          className="iconEdit"
                          src={iconEdit}
                          alt="iconEdit"
                          onClick={(e) => handleEditClick(e, date.horaFuncion1)}
                        />
                        <img
                          className="iconClose"
                          src={closeEdit}
                          alt="iconEdit"
                        />
                      </div>
                      <div className="acordeon__oneHourEdit">
                        <input
                          className="acordeon__Edit"
                          value={date.horaFuncion2}
                        ></input>
                        <img
                          className="iconEdit"
                          src={iconEdit}
                          alt="iconEdit"
                          onClick={(e) => handleEditClick(e, date.horaFuncion2)}
                        />
                        <img
                          className="iconClose"
                          src={closeEdit}
                          alt="iconEdit"
                        />
                      </div>
                      <div className="acordeon__oneHourEdit">
                        <input
                          className="acordeon__Edit"
                          value={date.horaFuncion3}
                        ></input>
                        <img
                          className="iconEdit"
                          src={iconEdit}
                          alt="iconEdit"
                          onClick={(e) => handleEditClick(e, date.horaFuncion3)}
                        />
                        <img
                          className="iconClose"
                          src={closeEdit}
                          alt="iconEdit"
                        />
                      </div>
                    </div>
                  )}
                </section>
                <button
                  className="acordeon__nuevaFuncion"
                  onClick={handleNewFuntion}
                >
                  Nueva Función +
                </button>
                {showEditFuncion && <EditFuncion />}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};
export default MenuAcordeon;
