import React, { useContext, useState } from "react";
import { AppContext } from "../router/router";
import logo from "../../assets/logo.jpg";
import person from "../../assets/person.svg";
import Categories from "../banner/categories/Categories";
import Cards from "../cards/cards";
import "./adminPanel.scss";
import AdminEdit from "../adminEdit/adminEdit";
import Boletos from "../boletos/boletos";
import Navbar from "../banner/navbar/Navbar";
import { Outlet } from "react-router-dom";
import logoutB from "../../assets/logout.svg"

const AdminPanel = () => {
  const { setIsLogin } = useContext(AppContext);


  const  handleClik = () =>{
    sessionStorage.removeItem('user');
    setIsLogin(false);
    window.location.reload();
  }

  return (
    <>
      <figure className="logout" onClick={handleClik}>
        <img src={logoutB} alt="salir" />
      </figure>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AdminPanel;
