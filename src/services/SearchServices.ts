
import axios from "axios";
import MovieList from "../componets/MovieList";
import { SearchMovie} from "../models/SeachMovie";


export const getSearchMovies = (movieValue: string) =>{
    return axios.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=dcbd5c64e218546da44ef4a64748d7df&include_adult=false&query=${movieValue}`
    );
}