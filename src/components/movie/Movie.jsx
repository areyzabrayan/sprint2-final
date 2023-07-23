import React, { useEffect, useState } from "react";
import "./movie.scss";
import { getMovie } from "../../services/getMovie";
import { useLocation } from "react-router";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  const getData = async () => {
    const data = await getMovie(id);
    setMovie(data);
  };
  return (
    <>
      <div className="container__Movie">
        <div className="container__detail">
          <figure>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810"
              alt=""
            />
          </figure>
          <div className="description">
            <h2>Movie</h2>
            <span>una pelicula muy buena</span>
            <div>
              <button className="b1">B</button>
              <button className="b2">148 min</button>
              <button className="b3">acction y aventura</button>
            </div>
            <div className="trailer">
              <h2>Trailer</h2>
              <figure>
                <img
                  src="https://isopixel.net/wp-content/uploads/2017/09/Coco-Movie-2017-Trailer-Disney-Pixar.jpg"
                  alt=""
                />
              </figure>
              <h2>Sinopsis</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                cum ipsum inventore corrupti perferendis enim ipsam aperiam
                autem delectus fugit odit, libero accusantium quisquam quam quia
                illo pariatur culpa. Facere!
              </p>
            </div>
          </div>
        </div>
        <div className="container__showTime">
          <h2>Horarios disponibles - 07 de julio </h2>
          <span className="span1">Elije el horario que prefieras</span>
          <span className="span2">Marco plaza del Mar</span>
          <div>
            <button>18:00</button>
            <button>19:30</button>
            <button>21:05</button>
          </div>
          <button>Selecionar boletos</button>
        </div>
      </div>
    </>
  );
};

export default Movie;
