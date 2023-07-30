import axios from "axios";
import { endPoints } from "../data/data";

export const getFunctions = async (id) => {
  try {
    const urlF = endPoints.urlFunctions(id);
    if (id === "Seleccione uno") {
      return;
    }
    const { data } = await axios.get(urlF);
    const detailFunction = {
      id: data.id,
      movie: data.idMovie,
      dates: data.date.map((item) => item.dia),
      horaFuncion: data.date.map((item) => item.horaFuncion),
    };
    return detailFunction;
  } catch (error) {
    return error;
  }
};
