import axios from "axios";
import { endPoints } from "./data";

export const getMovies = async () => {
  try {
    const { data } = await axios.get(endPoints.urlMovies);
    return data.results;
  } catch (error) {
    return error;
  }
};
