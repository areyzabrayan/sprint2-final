import React, { useContext } from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../router/router";

const Card = () => {
  const { cards } = useContext(AppContext);
  return (
    <>
      {cards.map((data, index) => (
        <div className="principal" key={index}>
          <article className="principal__card">
            <Link to={`/home/movie/${data.id}`}>
              <img className="image" src={data.image} />
            </Link>
            <div className="card">
              <h2 className="card__title">{data.name}</h2>
              <span className="card__Etitle">
                Titulo en ingles: {data.originalTitle}
              </span>
              <span>Estreno: {data.releaseDate}</span>
              <span>Genero: {data.gender.map((item) => ` ${item}`)}</span>
              <div className="card__endInfo">
                <span className="duration">
                  {data.adult ? "Adultos" : "Todo publico"}
                </span>
                <span className="duration">{data.runTime} Min</span>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Card;
