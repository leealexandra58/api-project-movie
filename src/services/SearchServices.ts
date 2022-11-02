
import axios from "axios";
import MovieList from "../componets/MovieList";
import { SearchMovie} from "../models/SeachMovie";


export const getSearchMovies = (movieValue: string) =>{
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY || "";
    return axios.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&query=${movieValue}`
    );
}