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
import axios from "axios";
import { endPoints } from "../../data/data";

const MenuAcordeon = () => {
  const { cinemas, setdate, date } = useContext(AppContext);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showEditFuncion, setShowEditFuncion] = useState(false); // Estado para controlar la visibilidad de EditFuncion
  const [editEnabled, setEditEnabled] = useState(false);

  const handleClick = (id) => {
    if (id !== undefined) {
      if (activeMenu === id) {
        setActiveMenu(null);
      } else {
        setActiveMenu(id);
      }
    }
  };

  useEffect(() => {
    getFunctions(activeMenu).then((response) => {
      setdate({ ...response });
    });
  }, [activeMenu]);

  const handleEditClick = async (e, horaFuncion, fieldName) => {
    e.stopPropagation();
    console.log("Clic en icono Edit:", horaFuncion);

    const updatedFunction = {
      id: activeMenu,
      idMovie: "Sala 1",
      cinemaId: activeMenu,
      [fieldName]: horaFuncion,
      dia: "2023-08-14",
      horaFuncion2: "18:00",
      horaFuncion3: "21:00",
    };

    try {
      console.log(endPoints.urlFunction);
      const response = await axios.put(
        endPoints.urlFunctions(activeMenu),
        updatedFunction
      );
      if (response.status === 200) {
        console.log("Objeto actualizado exitosamente");
      } else {
        console.log("Error al actualizar el objeto");
      }
    } catch (error) {
      console.error("Error en la solicitud PUT:", error);
    }
  };

  const handleNewFuntion = () => {
    console.log("click");
    setShowEditFuncion(!showEditFuncion);
  };

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setdate((prevDate) => ({
      ...prevDate,
      [fieldName]: value,
    }));
  };

  const editSala = () => {
    setEditEnabled(!editEnabled);
  };

  return (
    <div>
      {cinemas.map((cinema, index) => (
        <Accordion className=" " key={index} defaultActiveKey="0">
          <Accordion.Item
            eventKey={cinema.id ? cinema.id : ""}
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
                    <img
                      className="iconEditS"
                      src={iconEdit}
                      alt="iconEdit"
                      onClick={editSala}
                      style={{ opacity: editEnabled ? 1 : 0.5 }}
                    />
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
                          disabled={!editEnabled}
                          className="acordeon__Edit"
                          value={date.horaFuncion1 || ""}
                          onChange={(e) => handleInputChange(e, "horaFuncion1")}
                        ></input>
                        <img
                          disabled={!editEnabled}
                          className="iconEdit"
                          src={iconEdit}
                          alt="iconEdit"
                          onClick={(e) => {
                            if (editEnabled) {
                              handleEditClick(
                                e,
                                date.horaFuncion1,
                                "horaFuncion1"
                              );
                            }
                          }}
                          style={{ opacity: editEnabled ? 1 : 0.5 }}
                        />
                      </div>
                      <div className="acordeon__oneHourEdit">
                        <input
                          disabled={!editEnabled}
                          className="acordeon__Edit"
                          value={date.horaFuncion2 || ""}
                          onChange={(e) => handleInputChange(e, "horaFuncion2")}
                        ></input>
                        <img
                          className="iconEdit"
                          src={iconEdit}
                          alt="iconEdit"
                          onClick={(e) => {
                            if (editEnabled) {
                              handleEditClick(
                                e,
                                date.horaFuncion2,
                                "horaFuncion2"
                              );
                            }
                          }}
                          style={{ opacity: editEnabled ? 1 : 0.5 }}
                        />
                      </div>
                      <div className="acordeon__oneHourEdit">
                        <input
                          disabled={!editEnabled}
                          className="acordeon__Edit"
                          value={date.horaFuncion3 || ""}
                          onChange={(e) => handleInputChange(e, "horaFuncion3")}
                        ></input>
                        <img
                          className="iconEdit"
                          src={iconEdit}
                          alt="iconEdit"
                          onClick={(e) => {
                            if (editEnabled) {
                              handleEditClick(
                                e,
                                date.horaFuncion3,
                                "horaFuncion3"
                              );
                            }
                          }}
                          style={{ opacity: editEnabled ? 1 : 0.5 }}
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
