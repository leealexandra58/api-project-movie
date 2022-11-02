
import axios from "axios";
import MovieList from "../componets/MovieList";
import { SearchMovie, Genre} from "../models/SeachMovie";



export const getFilterMovies = (movieValue: string) =>{
    return axios.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=dcbd5c64e218546da44ef4a64748d7df&query=${movieValue}`
    );
}

export const getGenre = () =>{
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=dcbd5c64e218546da44ef4a64748d7df&language=en-US`)
    ;
}