import React from "react";
import Navbar from "../navbar/Navbar";
import Carrusel from "../carrusel/Carrusel";
import "./home.scss";
import Movie from "../../movie/Movie";

//import Cards from '../../cards/cards.jsx'; <Cards />;

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carrusel />
        <Movie />
      </div>
    </>
  );
};

export default Home;
