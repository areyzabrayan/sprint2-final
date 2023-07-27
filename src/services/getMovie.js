import axios from "axios";
import { endPoints } from "../data/data";

export const getMovie = async (id) => {
  try {
    const urlF = endPoints.urlMovie(id);
    const { data } = await axios.get(urlF);
    const detailMovie = {
      id: data.id,
      name: data.title,
      originalTitle: data.original_title,
      image: `${endPoints.urlImage}${data.poster_path}`,
      releaseDate: data.release_date,
      runTime: data.runtime,
      adult: data.adult,
      gender: data.genres.map((item) => item.name),
      overview: data.overview,
    };
    return detailMovie;
  } catch (error) {
    return error;
  }
};
