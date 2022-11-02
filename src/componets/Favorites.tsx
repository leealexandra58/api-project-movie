import React, { useContext } from 'react';
import { FavoritesContext } from "../context/FavoritesContext";
import { Movie } from "../models/Movie"
import { CiSquareRemove } from "react-icons/ci";
import "./Favorites.css"
import { SearchFavContext } from '../context/SearchFavContext';
import { Result } from '../models/SeachMovie';


export const Favorites = () => {

    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const favoritesClicked = (id: number) => {
        const clicked = favorites.some((movie: Movie) => movie.id === id);
        return clicked;
    }


    return (
        <div className="Favorites">
            {favorites.length > 0 ? (favorites.map((movie) => (
          <div className="favorite-card" key={movie.id}>
            <div className="img-title">
              <p className="image"><img  src= {`https://image.tmdb.org/t/p/original`+movie.backdrop_path} alt={movie.title}/></p>
              <p className="movie-title">{movie.title}</p>
              </div>
              {favoritesClicked(movie.id) ? (
              <button className="remove-btn" onClick={() => removeFavorite(movie.id)}>
                <CiSquareRemove size={25} /> <p className="remove-text">Remove</p>
              </button>
            ) : (
            <button onClick={() => addFavorite(movie)}>
                Add to Favorites
            </button>
            )}
          </div>
        )) 
        ) : (
        <h1></h1>
        )}
        </div>

    );
};