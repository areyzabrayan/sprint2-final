import React from "react";
import Navbar from "../navbar/Navbar";
import Carrusel from "../carrusel/Carrusel";
import "./home.scss";
import Cards from '../../cards/cards.jsx';
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carrusel />
        <Cards />
      </div>
    </>
  );
};

export default Home;
