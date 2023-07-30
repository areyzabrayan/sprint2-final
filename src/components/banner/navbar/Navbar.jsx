import React, { useContext } from "react";
import "./navbar.scss";
import Categories from "../categories/Categories";
import logo from "../../../assets/logo.jpg";
import iconD from "../../../assets/icon-arrow-down.svg";
import person from "../../../assets/person.svg";
import hamburguer from '../../../assets/hamburguer.svg'
import Fecha from "../fecha/fecha";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../router/router";
import Cine from "../cines/cine";

const Navbar = () => {
  const { setShow } = useContext(AppContext);
  const location = useLocation();
  const pathname = location.pathname;
  const shouldShowCategories = pathname === "/home";

  return (
    <div className="navbar">
      <div className="logo">
        <figure className="logo__figure">
          <img src={logo} alt="logo" />
        </figure>
        <h2>CINE COLOMBIA</h2>
      </div>
      {shouldShowCategories && <Categories />}

      <div className="diary">
        <div className="api__local">
          <Cine />
          <Fecha />
        </div>
        <figure className="burguer">
          <img src={hamburguer} alt="" />
        </figure>
        <figure className="person" onClick={() => setShow(true)}>
          <img src={person} alt="" />
        </figure>

        {/* <div className="diary__containers">
          <p>Cines cercanos</p>
          <figure
            className="diary__options"
            onClick={() => setIsOpenCine(!isOpen)}
          >
            <figcaption>
              <p>seleccione un cine</p>
            </figcaption>
            <img src={iconD} alt="logo" />
          </figure>
        </div>
        <div className="diary__containers">
          <p>Fecha</p>
          <figure
            className="diary__options"
            onClick={() => setIsOpenFFecha(!isOpenF)}
          >
            <figcaption>
              <p>Seleccione una Fecha</p>
            </figcaption>
            <img src={iconD} alt="logo" />
          </figure>
        </div>

        <figure className="person" onClick={() => setShow(true)}>
          <img src={person} alt="" />
        </figure>
        {/* <div className={`cines ${isOpen && "open"}`}>
          <Cine />
        </div> */}
        {/* <div className={`fechas ${isOpenF && "openF"}`}>
          <Fecha />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
