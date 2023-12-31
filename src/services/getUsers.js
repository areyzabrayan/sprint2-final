import axios from "axios";
import { endPoints } from "../data/data";

export const getUser = async ({ email, password }) => {
  try {
    const url = `${endPoints.urlAdmin}?email=${email}&password=${password}`;
    const { data } = await axios.get(url);
    return data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
