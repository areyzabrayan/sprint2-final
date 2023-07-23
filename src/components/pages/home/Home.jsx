import React from "react";
import Navbar from "../../banner/navbar/Navbar";
import Carrusel from "../../banner/carrusel/Carrusel";
import "./home.scss";
import Movie from "../../movie/Movie";
import Cinema from "../../cinema/Cinema";
import Login from "../login/Login";

//import Cards from '../../cards/cards.jsx'; <Cards />;

const Home = ({ signIn }) => {
  return (
    <>
      <div>
        <Navbar />
        <Carrusel />
        <Login signIn={signIn} />
        {/* <Cinema /> */}
        {/* <Movie /> */}
      </div>
    </>
  );
};

export default Home;
