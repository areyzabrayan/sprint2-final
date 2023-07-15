import axios from "axios";
import { URL_CONSULTA } from "./data";

export const getMovies = async () => {
  try {
    const { data } = await axios.get(URL_CONSULTA);
    return data.results;
  } catch (error) {
    return error;
  }
};
