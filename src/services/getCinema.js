import axios from "axios";
import { endPoints } from "../data/data";

export const getCinema = async () => {
  try {
    const { data } = await axios.get(endPoints.urlCinemas);
    const cinemasDetail = data.map((cinema) => ({
      id: cinema.id,
      name: cinema.name,
      room: cinema.room,
    }));
    return cinemasDetail;
  } catch (error) {
    return error;
  }
};
