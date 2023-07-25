import React, { useEffect, useState } from "react";
import "./card.scss";
import { API_PATH, getGender } from "../../data/data";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      <div className="principal">
        <article className="principal__card">
          <Link to={`/home/movie/${data.id}`}>
            <img className="image" src={data.image} />
          </Link>
          <div className="card">
            <p className="card__title">{data.name}</p>
            <div className="card__info">
              <p className="card__Etitle">
                Titulo en ingles: {data.originalTitle}
              </p>
              <span>Estreno: {data.releaseDate}</span>
              <span>Genero: {data.gender.map((item) => ` ${item}`)}</span>
            </div>
            <div className="card__endInfo">
              <span>{data.adult ? "Adultos" : "Todos"}</span>
              <span className="duration">{data.runTime} Min</span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Card;
