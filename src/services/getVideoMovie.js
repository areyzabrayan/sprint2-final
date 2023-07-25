import axios from "axios";
import { endPoints } from "./data";

export const getVideoMovie = async (idMovie) => {
  try {
    const url2 = endPoints.urlVideo(idMovie);
    const { data } = await axios.get(url2);
    const video = data.results.find((item) =>
      item.type.toLowerCase().includes("trailer")
    );
    return video;
  } catch (error) {
    console.log(error);
    return null;
  }
};
