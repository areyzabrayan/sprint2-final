import React from "react";
import "./cards.scss";
import Card from "../card/card.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovie } from "../../services/getMovie";
import { getMovies } from "../../services/getMovies";

const Cards = ({ category }) => {
  const [cards, setCards] = useState([]);
  const list = [];

  useEffect(() => {
    getData();
    console.log(category);
  }, [category]);

  const getData = async () => {
    const data = await getMovies();

    for (let i = 0; i < data.length; i++) {
      const detailMovie = await getMovie(data[i].id);
      list.push(detailMovie);
    }
    if (category === "") {
      setCards(list);
    } else {
      const filterGenders = list.filter((item) =>
        item.gender.find((gender) => gender === category)
      );
      setCards(filterGenders);
    }
    //setCards(list);
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
