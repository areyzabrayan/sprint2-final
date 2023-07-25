import React from "react";
import Navbar from "../../banner/navbar/Navbar";
import Carrusel from "../../banner/carrusel/Carrusel";
import "./home.scss";
import Login from "../login/Login";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carrusel />
        <Login />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
