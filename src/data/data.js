import axios from "axios";
export const URL_API = "https://api.themoviedb.org/3/movie/now_playing";
export const API_KEY = "807505542806c3df770aac06fd82fe04";
export const URL_CONSULTA = `${URL_API}?api_key=${API_KEY}&language=es-ES`;
export const API_PATH = "https://image.tmdb.org/t/p/w500/";


export const getPelis = async() =>{
    try {
        const {data} = await axios.get(URL_CONSULTA);
        return data.results
    } catch (error) {
       return error 
    }
}