import React from "react";
import Navbar from "../navbar/Navbar";
import Carrusel from "../carrusel/Carrusel";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carrusel />
      </div>
    </>
  );
};

export default Home;
