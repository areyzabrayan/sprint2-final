import React from "react";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AppContext } from "../router/router";
import "./menuAcordeon.scss";

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
                  <h3>Sala 1</h3>
                  <div className="acordeon__hoursEdit">
                    <input className="acordeon__Edit" placeholder="1:30 pm"></input>
                    <input
                      className="acordeon__Edit"
                      placeholder="5:00 pm"
                    ></input>
                    <input className="acordeon__Edit" value={"8:45 pm"}></input>
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
