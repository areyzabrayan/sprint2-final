import React from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AppContext } from "../router/router";
import "./menuAcordeon.scss";
import iconEdit from "../../assets/edit-icon.svg";
import closeEdit from "../../assets/close-icon.svg";

const MenuAcordeon = () => {
  const { cinemas } = useContext(AppContext);
  return (
    <div>
      {cinemas.map((cinema, index) => (
        <Accordion className=" " key={index} defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
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
                  <div className="acordeon__hoursEdit">
                    <div className="acordeon__oneHourEdit">
                      <input
                        className="acordeon__Edit"
                        value={"1:30 pm"}
                      ></input>
                      <img className="iconEdit" src={iconEdit} alt="iconEdit" />
                      <img
                        className="iconClose"
                        src={closeEdit}
                        alt="iconEdit"
                      />
                    </div>
                    <div className="acordeon__oneHourEdit">
                      <input
                        className="acordeon__Edit"
                        value={" 5:00 pm"}
                      ></input>
                      <img className="iconEdit" src={iconEdit} alt="iconEdit" />
                      <img
                        className="iconClose"
                        src={closeEdit}
                        alt="iconEdit"
                      />
                    </div>
                    <div className="acordeon__oneHourEdit">
                      <input
                        className="acordeon__Edit"
                        value={"8:45 pm"}
                      ></input>
                      <img className="iconEdit" src={iconEdit} alt="iconEdit" />
                      <img
                        className="iconClose"
                        src={closeEdit}
                        alt="iconEdit"
                      />
                    </div>
                  </div>
                </section>
                <button className="acordeon__nuevaFuncion">
                  Nueva Función +
                </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default MenuAcordeon;
