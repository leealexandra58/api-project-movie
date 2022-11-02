import React from "react";
import { useContext} from "react";
import { Movie, MovieCardProps } from "../models/Movie"
import "./MovieList.css"
import { FavoritesContext } from "../context/FavoritesContext";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";


export function MovieList({topRated, genreName}:MovieCardProps) {

  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const favoritesClicked = (id: number) => {
      const clicked = favorites.some((movie: Movie) => movie.id === id);
      return clicked;
  }

 


  return (
    <div className="wrapper">
     <div>

      <h2>Top Rated</h2>
     </div>

<div className="MovieList">

      {topRated.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <div>
          <Link to = {`/moviedisplay/${movie.id}`}><img  src= {`https://image.tmdb.org/t/p/original`+movie.backdrop_path} alt="Movie Cover"/></Link>
          <p> {movie.title}</p>
        </div>
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
      </div>
  );

}
  
export default MovieList;


  