import React from "react";
import Navbar from "../../banner/navbar/Navbar";
import Carrusel from "../../banner/carrusel/Carrusel";
import "./home.scss";
import Movie from "../../movie/Movie";
import Login from "../login/Login";

import Cards from "../../cards/cards.jsx";
import { Outlet } from "react-router";

const Home = ({ signIn, show, showV }) => {
  return (
    <>
      <div>
        <Navbar show={show} />
        <Carrusel />
        <Login signIn={signIn} showV={showV} show={show} />
        <Outlet />
        {/* <Movie /> */}
      </div>
    </>
  );
};

export default Home;
