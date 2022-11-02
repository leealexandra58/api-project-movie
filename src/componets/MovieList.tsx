import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getMoviesApi } from "../services/MovieApi"
import { Movie } from "../models/Movie"
import "./MovieList.css"

export function MovieList() {

  const [movieList, setMovieList] = useState<Movie[]>([]);


  return (
     (
      <div className="MovieList">



        {movieList.map((movie,i)=>(
          <div>
          <p><img  src= {`https://image.tmdb.org/t/p/original`+movie.backdrop_path} alt="Movie Cover"/></p>
          <p> {movie.title}</p>
          </div>
        ))}




      </div>
     ));
  }

  export default MovieList;

  