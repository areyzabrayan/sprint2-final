import axios from "axios";
export const URL_API = "https://api.themoviedb.org/3/movie/now_playing";
export const API_KEY = "807505542806c3df770aac06fd82fe04";
export const URL_CONSULTA = `${URL_API}?api_key=${API_KEY}&language=es-ES`;
export const API_PATH = "https://image.tmdb.org/t/p/w500/";

const genreAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
export const dataCines = "https://back-sprint2.onrender.com/teatros";
export const dataFechas = "https://back-sprint2.onrender.com/fechas";
const userLogin = "https://back-sprint2.onrender.com/usuarios";

// export const getGender = async (id) => {
//     try {
//       const response = await axios.get(genreAPI);
//       const genres = response.data.genres;
//       const selectedGenre = genres.find((genre) => genre.id === id);
//       return selectedGenre?.name || "Desconocido";
//     } catch (error) {
//       console.error(error);
//       return "Desconocido";
//     }
//   };

// export const getPelis = async () => {
//   try {
//     const { data } = await axios.get(URL_CONSULTA);
//     return data.results;
//   } catch (error) {
//     return error;
//   }
// };

export const getTeatros = async () => {
  try {
    const result = await axios.get(dataCines);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getFechas = async () => {
  try {
    const result = await axios.get(dataFechas);
    return result.data;
  } catch (error) {
    return error;
  }
};
// export const getUsers = async (formData) => {
//   try {
//     const result = await axios.get(userLogin);
//     const users = result.data;
//     const loggedUser = users.find(
//       (user) =>
//         user.email === formData.email && user.password === formData.password
//     );
//     return loggedUser;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return null;
//   }
// };
