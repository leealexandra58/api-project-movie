
import axios from "axios";
import MovieList from "../componets/MovieList";
import { SearchMovie} from "../models/SeachMovie";


export const getSearchMovies = (movieValue: string) =>{
    return axios.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=94537c011511d5109a7ca20f337286f3&query=${movieValue}`
    );
}