import React, { useContext } from "react";
import "./navbar.scss";
import Categories from "../categories/Categories";
import logo from "../../../assets/logo.jpg";
import person from "../../../assets/person.svg";
import Fecha from "../fecha/fecha";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../router/router";
import Cine from "../cines/cine";
import { getData } from "../../../services/getData";
import { useEffect } from "react";

const Navbar = () => {
  const {
    setShow,
    setSelectedDate,
    setseletDay,
    setCategory,
    category,
    setCards,
  } = useContext(AppContext);
  const location = useLocation();
  const pathname = location.pathname;
  const shouldShowCategories = pathname === "/private";
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedDate(null);
    setseletDay("");
    setCategory("");
    navigate("/home");
  };

  useEffect(() => {
    getData(category, setCards);
  }, [category, setCards]);

  return (
    <div className="navbar">
      <div className="logo" onClick={handleClick}>
        <figure className="logo__figure">
          <img src={logo} alt="logo" />
        </figure>
        <h2>CINE COLOMBIA</h2>
      </div>
      {pathname === "/home" || pathname === "/private" ? <Categories /> : null}

      <div className="diary">
        {!shouldShowCategories && (
          <div className="api__local">
            <Cine />
            <Fecha />
          </div>
        )}

        <figure className="person" onClick={() => setShow(true)}>
          <img src={person} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Navbar;
