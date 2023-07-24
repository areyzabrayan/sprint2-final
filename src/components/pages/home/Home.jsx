import React from "react";
import Navbar from "../../banner/navbar/Navbar";
import Carrusel from "../../banner/carrusel/Carrusel";
import "./home.scss";
import Movie from "../../movie/Movie";
import Cinema from "../../cinema/Cinema";
import Login from "../login/Login";

import Cards from '../../cards/cards.jsx';

const Home = ({ signIn, show, showV}) => {
  return (
    <>
      <div>
        <Navbar show={show}/>
        <Carrusel />
        <Login signIn={signIn} showV={showV} show={show}  />
        <Cards />
        {/* <Cinema /> */}
        {/* <Movie /> */}
      </div>
    </>
  );
};

export default Home;
