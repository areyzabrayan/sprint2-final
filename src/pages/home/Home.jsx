import React from "react";
import Navbar from "../../components/banner/navbar/Navbar";
import Carrusel from "../../components/banner/carrusel/Carrusel";
import "./home.scss";
import Cards from '../../components/cards/cards.jsx';
import Boletos from "../../components/boletos/boletos";
import BuyTikecks from "../../components/buyTikecks/buyTikecks";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carrusel />
        <Cards />
        {/* <Boletos /> */}
        {/* <BuyTikecks/> */}
      </div>
    </>
  );
};

export default Home;
