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
              <p className="card__Etitle">{data.originalTitle}</p>
              <p className="card__date">Fecha de estreno: {data.releaseDate}</p>
              <div>
                <span>{data.adult ? "Adultos" : "Todos"}</span>
                <span>{data.releaseDate}</span>
                <span>{data.gender.map((item) => ` ${item.name}`)}</span>
              </div>
            </div>
            <div className="card__endInfo">
              <p className="publict"></p>
              <p className="duration">120 Min</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Card;
