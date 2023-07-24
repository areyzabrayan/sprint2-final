import React from "react";
import Navbar from "../../banner/navbar/Navbar";
import Carrusel from "../../banner/carrusel/Carrusel";
import "./home.scss";
import Login from "../login/Login";
import { Outlet } from "react-router";

const Home = ({ signIn, show, showV }) => {
  return (
    <>
      <div>
        <Navbar show={show} />
        <Carrusel />
        <Login signIn={signIn} showV={showV} show={show} />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
