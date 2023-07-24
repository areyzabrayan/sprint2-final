import React from "react";
import Navbar from "../../banner/navbar/Navbar";
import Carrusel from "../../banner/carrusel/Carrusel";
import "./home.scss";
import Login from "../login/Login";
import { Outlet } from "react-router";

const Home = ({ signIn, show, showV, category, setCategory }) => {
  return (
    <>
      <div>
        <Navbar show={show} category={category} setCategory={setCategory} />
        <Carrusel />
        <Login signIn={signIn} showV={showV} show={show} />
        <Outlet category={category} />
      </div>
    </>
  );
};

export default Home;
