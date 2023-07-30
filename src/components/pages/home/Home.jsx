import React from "react";
import Navbar from "../../banner/navbar/Navbar";
import Carrusel from "../../banner/carrusel/Carrusel";
import "./home.scss";
import Login from "../login/Login";
import { Outlet } from "react-router";
import Boletos from "../../boletos/boletos";
import FinalPurchase from "../../finalPurchase/finalPurchase";
import QrTikecks from "../../QR-tikecks/QrTikecks";
import BuyTikecks from "../../buyTikecks/buyTikecks";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Carrusel />
        <Login />
        <Outlet />
        {/* <FinalPurchase/> */}
        {/* <Boletos/> */}
        {/* <BuyTikecks/> */}
        {/* <QrTikecks/> */}
      </div>
    </>
  );
};

export default Home;
