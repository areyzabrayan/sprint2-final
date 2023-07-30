import React, { useContext } from "react";
import { AppContext } from "../router/router";
import logo from "../../assets/logo.jpg";
import person from "../../assets/person.svg";
import Categories from "../banner/categories/Categories";
import Cards from "../cards/cards";
import "./adminPanel.scss";
import AdminEdit from "../adminEdit/adminEdit";
import Boletos from "../boletos/boletos";
import Navbar from "../banner/navbar/Navbar";

const AdminPanel = () => {
  const { setIsLogin } = useContext(AppContext);
  return (
    <>
      <Navbar/>
    
     
      {/* <Cards/> */}
      <AdminEdit/>
      
    </>
  );
};

export default AdminPanel;
