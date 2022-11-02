import React, { useContext } from 'react';
import { CiSquareRemove } from "react-icons/ci";
import { SearchFavContext } from '../context/SearchFavContext';
import { Result } from '../models/SeachMovie';
import { Link } from 'react-router-dom';


export const SearchFav = () => {

    const { searchFav, addSearchFav, removeSearchFav } = useContext(SearchFavContext);

    const searchFavoritesClicked = (id: number) => {
        const clicked = searchFav.some((results: Result) => results.id === id);
        return clicked;
    }


    return (
        <div className="Favorites">
        {searchFav.length > 0 ? (searchFav.map((movie) => (
        <div className="favorite-card" key={movie.id}>
        <div className="img-title">
            <Link to= {`/moviedisplay/${movie.id}`}><p className="image"><img  src= {`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title}/></p></Link>
            <p className="movie-title">{movie.title}</p>
    </div>
    {searchFavoritesClicked(movie.id) ? (
    <button className="remove-btn" onClick={() => removeSearchFav(movie.id)}>
      <CiSquareRemove size={25} /> <p className="remove-text">Remove</p>
    </button>
  ) : (
  <button onClick={() => addSearchFav(movie)}>
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