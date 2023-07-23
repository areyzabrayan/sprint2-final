import axios from "axios";
import { endPoints } from "./data";

export const getMovie = async (id) => {
  try {
    const { data } = await axios.get(endPoints.urlMovie(id));
    return data;
  } catch (error) {
    return error;
  }
};
