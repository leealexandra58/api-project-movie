import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getMoviesApi } from "../services/MovieApi"
import { Movie } from "../models/Movie"
import "./MovieList.css"
import MovieCard from "./MovieCard";
 
 
export default function MovieList() {
 
  const [movieList, setMovieList] = useState<Movie[]>([]);
 
  useEffect(()=>{
    getMoviesApi().then((response)=>{
      setMovieList(response.data.results)
    })
  },[])
 
  return (
    <div className="MovieList">
      <MovieCard movieList={movieList}></MovieCard>
    </div>
  );
}
