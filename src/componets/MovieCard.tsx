import { useState } from "react";
import { Link } from "react-router-dom";
import { MovieCardProps } from "../models/Movie";
import "./MovieCard.css";
 
 
export default function MovieCard({movieList}:MovieCardProps) {
    const [favorite, setFavorite] = useState(false);
 
  return (
    <div className="MovieCard">
      {movieList.map((movie,i)=>(
        <div key={i}>
          <Link to = {`/moviedisplay/${movie.id}`}><img  src= {`https://image.tmdb.org/t/p/original`+movie.backdrop_path} alt="Movie Cover"/></Link>
          <p> {movie.title}</p>
        </div>
      ))}
    </div>
  )
}
