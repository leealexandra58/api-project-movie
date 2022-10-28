import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "../models/Movie";
import { getMoviesApi } from "../services/MovieApi";
import "./MovieDisplay.css";
 
 
export default function Moviedisplay() {
  let {id}  = useParams();
  let idnumber = parseInt(id as string);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  let movie: Movie | undefined = movieList.find((movie) => movie.id === idnumber);
 
  useEffect(()=>{
    getMoviesApi().then((response)=>{
      setMovieList(response.data.results)
    })
  },[])
 
  return(
    <div className="movieDisplay">
      <Link to="/"><button>Back to home</button></Link>
      <img  src= {`https://image.tmdb.org/t/p/original`+ movie?.backdrop_path} alt="Movie Cover"/>
      <p>{movie?.title}</p>
      <div className="votes">
        <p>{movie?.vote_average} /10</p>
        <p>{movie?.vote_count}</p>
      </div>
      <p>{movie?.overview}</p>
    </div>
  )
}
