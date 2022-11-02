import axios from "axios";
 
export function getTopRated() {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY || "";
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&include_adult=false`);
}

