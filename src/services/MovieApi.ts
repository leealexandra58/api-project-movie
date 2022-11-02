

import axios from "axios";
import { Movie } from "../models/Movie";




export function getMoviesApi() {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=dcbd5c64e218546da44ef4a64748d7df&include_adult=false');
}

