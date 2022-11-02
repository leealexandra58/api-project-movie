import React from "react";
import { useEffect, useContext, useState } from "react";
import { getMoviesApi } from "../services/MovieApi"
import { Movie } from "../models/Movie"
import "./MovieList.css"
import { FavoritesContext } from "../context/FavoritesContext";
import { BsStar, BsFillStarFill } from "react-icons/bs";


export function MovieList() {

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const favoritesClicked = (id: number) => {
      const clicked = favorites.some((movie: Movie) => movie.id === id);
      return clicked;
  }

  useEffect(()=>{

    getMoviesApi().then((response)=>{
    console.log(response.data.results);
    setMovieList(response.data.results)
    })

  },[])


  return (
    <div className="MovieList">
      {movieList.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <p className="image"><img  src= {`https://image.tmdb.org/t/p/original`+movie.backdrop_path} alt={movie.title}/></p>
          <p className="movie-title">{movie.title}</p>

          <div className="overlay">
            {favoritesClicked(movie.id) ? (
            <button className="fav-btn rem-btn" onClick={() => removeFavorite(movie.id)}>
              <BsFillStarFill /> Remove From Favorites
            </button>
            ) : (
            <button className="fav-btn" onClick={() => addFavorite(movie)}>
              <BsStar /> Add to Favorites
            </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

}
  
export default MovieList;


  