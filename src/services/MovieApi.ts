

import axios from "axios";
import { Movies } from "../models/Movie";




export function getMoviesApi() {
    return axios.get<Movies[]>('https://api.themoviedb.org/3/search/movie?api_key=94537c011511d5109a7ca20f337286f3&query=Jack+Reacher'
    
    );
}