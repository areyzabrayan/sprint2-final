const URL_API_MOVIES = "https://api.themoviedb.org/3/movie/now_playing";
const URL_API_MOVIE = "https://api.themoviedb.org/3/movie/";
const API_KEY = "f9f10c64c7bfff66c78009f93441364c";
const URL_IMG = "https://image.tmdb.org/t/p/w500/";
const URL_SERVER = "https://back-sprint2.onrender.com/";
//gola
export const endPoints = {
  urlCinemas: `${URL_SERVER}cinemas`,
  urlFunctions: (id) => `${URL_SERVER}funciones/${id}`,
  urlFunction: `${URL_SERVER}funciones`,
  urlTickect: `${URL_SERVER}tiquetes`,
  urlAdmin: `${URL_SERVER}usuarios`,
  urlMovies: `${URL_API_MOVIES}?api_key=${API_KEY}&language=es-ES`,
  urlMovie: (id) => `${URL_API_MOVIE}${id}?api_key=${API_KEY}&language=es-ES`,
  urlImage: `${URL_IMG}`,
  urlVideo: (id) =>
    `${URL_API_MOVIE}${id}/videos?api_key=${API_KEY}&languaje=es-ES`,
  tiquetes: `${URL_SERVER}tiquetes`,
};
