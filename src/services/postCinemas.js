import axios from "axios";
import { endPoints } from "../data/data";

export const postCinema = async (cinema) => {
  try {
    const response = await axios.post(endPoints.urlCinemas, cinema);

    return response.status === 201 ? true : false;
  } catch (error) {
    return false;
  }
};