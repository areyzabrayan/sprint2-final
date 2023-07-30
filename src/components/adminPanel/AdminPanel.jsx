import React, { useContext } from "react";
import { AppContext } from "../router/router";
import logo from "../../assets/logo.jpg";
import person from "../../assets/person.svg";
import Categories from "../banner/categories/Categories";
import Cards from "../cards/cards";
import "./adminPanel.scss";
import AdminEdit from "../adminEdit/adminEdit";
<<<<<<< HEAD
import Boletos from "../boletos/boletos";
import Navbar from "../banner/navbar/Navbar";
=======
import Navbar from "../banner/navbar/Navbar";

>>>>>>> da3bdafec5aa4c813c8d2769876aa30914d3e65b

const AdminPanel = () => {
  const { setIsLogin } = useContext(AppContext);
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <button onClick={() => setIsLogin(false)}>Cerrar sesion</button>;
=======
      <Navbar/>
    
     
>>>>>>> da3bdafec5aa4c813c8d2769876aa30914d3e65b
      {/* <Cards/> */}
      <AdminEdit/>
      
    </>
  );
};

export default AdminPanel;
