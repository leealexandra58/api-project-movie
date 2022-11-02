
import axios from "axios";
import MovieList from "../componets/MovieList";
import { SearchMovie, Genre} from "../models/SeachMovie";



export const getFilterMovies = (movieValue: string) =>{
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY || "";
    return axios.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}=${movieValue}`
    );
}

export const getGenre = () =>{
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY || "";
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    ;
}