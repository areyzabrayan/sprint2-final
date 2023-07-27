import React, { useContext } from "react";
import { AppContext } from "../router/router";
import logo from "../../assets/logo.jpg";
import person from "../../assets/person.svg";
import Categories from "../banner/categories/Categories";
import Cards from "../cards/cards";
import "./adminPanel.scss";
import AdminEdit from "../adminEdit/adminEdit";
import Boletos from "../boletos/boletos";

const AdminPanel = () => {
  const { setIsLogin } = useContext(AppContext);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <figure className="logo__figure">
            <img src={logo} alt="logo" />
          </figure>
          <h2>CINE COLOMBIA</h2>
        </div>
        <Categories />
        <figure className="person" onClick={() => show(true)}>
          <img src={person} alt="" />
        </figure>
      </div>
      <button onClick={() => setIsLogin(false)}>Cerrar sesion</button>;
      {/* <Cards/> */}
      {/* <AdminEdit/> */}
      <Boletos />
      {/* <BuyTikecks/> */}
    </>
  );
};

export default AdminPanel;
