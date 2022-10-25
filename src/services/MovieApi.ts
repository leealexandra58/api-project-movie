

import axios from "axios";
import { Movie } from "../models/Movie";




export function getMoviesApi() {
    return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=94537c011511d5109a7ca20f337286f3'
    
    );
}

