import React, { useContext, useState } from "react";
import "./navbar.scss";
import Categories from "../categories/Categories";
import logo from "../../../assets/logo.jpg";
import person from "../../../assets/person.svg";
import hamburguer from "../../../assets/hamburguer.svg";
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
    setSeatsSelection,
    isLogin,
  } = useContext(AppContext);
  const location = useLocation();
  const pathname = location.pathname;
  const shouldShowCategories = pathname === "/private";
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setSelectedDate(null);
    setseletDay("");
    setCategory("");
    setSeatsSelection("");
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
      {pathname === "/home" || pathname === "/private" ? (
        <Categories isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : null}

      <div className="diary">
        {!shouldShowCategories && (
          <div className="api__local">
            {isLogin ? null : <Cine />}
            {isLogin ? null : <Fecha />}
          </div>
        )}

        <figure className={`person ${isOpen && "open"}`} onClick={() => {
          setShow(true)
          }}>
          <img src={person} alt="" />
        </figure>
        <figure className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburguer} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Navbar;
