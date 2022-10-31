
import axios from "axios";
import MovieList from "../componets/MovieList";
import { SearchMovie, Genre} from "../models/SeachMovie";



export const getFilterMovies = (movieValue: string) =>{
    return axios.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=94537c011511d5109a7ca20f337286f3&query=${movieValue}`
    );
}

export const getGenre = () =>{
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=94537c011511d5109a7ca20f337286f3&language=en-US`)
    ;
}