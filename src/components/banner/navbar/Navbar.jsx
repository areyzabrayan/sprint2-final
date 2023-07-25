import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Categories from "../categories/Categories";
import logo from "../../../assets/logo.jpg";
import iconD from "../../../assets/icon-arrow-down.svg";
import person from "../../../assets/person.svg";
import Cine from "../cines/cine";
import { getFechas, getTeatros } from "../../../data/data";
import Fecha from "../fecha/fecha";
import { useLocation } from "react-router-dom";

const Navbar = ({ show, category, setCategory }) => {
  const [cines, setCines] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getTeatros();
    setCines(data);
  };
  const [fechas, setFechas] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    const data = await getFechas();
    setFechas(data);
  };
  const [isOpen, setIsOpenCine] = useState(false);
  const [isOpenF, setIsOpenFFecha] = useState(false);

  const shouldShowCategories = pathname === "/home";

  return (
    <div className="navbar">
      <div className="logo">
        <figure className="logo__figure">
          <img src={logo} alt="logo" />
        </figure>
        <h2>CINE COLOMBIA</h2>
      </div>
      {shouldShowCategories && (
        <Categories category={category} setCategory={setCategory} />
      )}
      <div className="diary">
        <div className="diary__containers">
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

        <figure className="person" onClick={() => show(true)}>
          <img src={person} alt="" />
        </figure>
        <div className={`cines ${isOpen && "open"}`}>
          {cines.map((nombre, index) => (
            <Cine key={index} data={nombre} />
          ))}
        </div>
        <div className={`fechas ${isOpenF && "openF"}`}>
          {fechas.map((daily, index) => (
            <Fecha key={index} data={daily} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
