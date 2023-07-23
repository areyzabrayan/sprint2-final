import React from "react";
import "./cards.scss";
import { getPelis } from "../../data/data";
import Card from "../card/card.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getPelis();
    setCards(data);
  };
  return (
    <>
      <h1 className="title__cards">EN CARTELERA</h1>

      <section className="cards__container">
        {cards.map((card, index) => (
          <Link key={index} to={`/home/movie/${card.id}`}>
            <Card data={card} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Cards;
