import React, { useEffect, useState } from "react";
import "./card.scss";
import { API_PATH, getGender } from "../../data/data";


const Card = ({ data }) => {
  const [genre, setGenre] = useState("")
 useEffect(() => {
  consultarGenero(data.genre_ids)
 }, [data.genre_ids]
 );

  const consultarGenero = async (genreIds) => {
    try {
      const genreName = await getGender(genreIds[0]);
      setGenre(genreName);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="principal">
        <article className="principal__card">
          <figure>
            <img
              className="image"
              src={`${API_PATH + data.poster_path}`}
              alt="imagen"
            />
          </figure>
          <div className="card">
            <p className="card__title">{data.title}</p>
            <div className="card__info">
              <p className="card__Etitle">{data.original_title}</p>
              <p className="card__date">
                Fecha de estreno: {data.release_date}
              </p>
              <p className="card__gender"></p>
            </div>
            <div className="card__endInfo">
              <p className="publict">genero: {genre}</p>
              <p className="duration">120 Min</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Card;
