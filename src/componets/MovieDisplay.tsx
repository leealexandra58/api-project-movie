import { useParams } from "react-router-dom";
import { Movie, MovieCardProps } from "../models/Movie";
import { Result } from "../models/SeachMovie";
import "./MovieDisplay.css";
 
 
export default function Moviedisplay({topRated, results, genreName}:MovieCardProps) {
  let {id}  = useParams();
  let idnumber = parseInt(id as string)
  let movie: Movie | undefined = topRated.find((movie) => movie.id === idnumber);
  let resultMovie: Result | undefined = results.find((movie) => movie.id === idnumber);
 
  return(
    
    <div className="movieDisplay">
      {movie != undefined ? <div>
        <img  src= {`https://image.tmdb.org/t/p/original`+ movie?.backdrop_path} alt="Movie Cover"/>
        <p>{movie?.title}</p>
        <div className="votes">
          <p>{movie?.vote_average} /10</p>
          <p>{movie?.vote_count} votes</p>
        </div>
        <p>{movie?.overview}</p>
        <div>
          <h3>Genres</h3>
          <div className="genres">
            {movie?.genre_ids.map(genre => <p>{genreName(genre)}</p>)}
          </div>
          </div>

      </div> : <div>
        <img  src= {`https://image.tmdb.org/t/p/original`+ resultMovie?.poster_path} alt="Movie Cover"/>
        <p>{resultMovie?.title}</p>
        <div className="votes">
          <p>{resultMovie?.vote_average} /10</p>
          <p>{resultMovie?.vote_count} votes</p>
        </div>
        <p>{resultMovie?.overview}</p>
        <div>
          <h3>Genres</h3>
          <div className="genres">
            {resultMovie?.genre_ids.map(genre => <p>{genreName(genre)}</p>)}
          </div>
          </div>

      </div>}
      </div>
  
  )
}