import React, { useContext } from "react";
import "./cards.scss";
import Card from "../card/card.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { getMovie } from "../../services/getMovie";
import { getMovies } from "../../services/getMovies";
import { AppContext } from "../router/router";
import { getData } from "../../services/getData";

const Cards = () => {
  const { category, setCards } = useContext(AppContext);

  useEffect(() => {
    getData(category, setCards);
  }, [category, setCards]);

  return (
    <>
      <h1 className="title__cards">EN CARTELERA</h1>
      <section className="cards__container">
        <Card />
      </section>
    </>
  );
};

export default Cards;
