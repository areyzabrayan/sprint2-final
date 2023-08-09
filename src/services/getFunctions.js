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
      dia: data.dia,
      horaFuncion1: data.horaFuncion1,
      horaFuncion2: data.horaFuncion2,
      horaFuncion3: data.horaFuncion3,
    };
    return detailFunction;
  } catch (error) {
    return error;
  }
};

export const saveFunction = async (item) => {
  try {
    const { data } = await axios.post(endPoints.urlFunction, item);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
