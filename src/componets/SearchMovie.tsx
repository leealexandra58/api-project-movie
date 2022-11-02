import React from "react";
import { useContext, useEffect, useState } from "react";
import { getMoviesApi } from "../services/MovieApi"
import { Movie } from "../models/Movie"
import "./MovieList.css"
import { Result } from "../models/SeachMovie";
import { getSearchMovies } from "../services/SearchServices";
import { SearchFavContext } from "../context/SearchFavContext";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import "./SearchMovie.css"


export function SearchMovie() {

    const [searchInput, setSearchInput] = useState("")
    const [results, setSearchResults] = useState<Result[]>([])
    const { searchFav, addSearchFav, removeSearchFav } = useContext(SearchFavContext);
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [filter, setFilter] = useState('');
    
    useEffect(()=>{
  
      getMoviesApi().then((response)=>{
        console.log(response.data.results);
        const {data} = response
        setMovieList(response.data.results)
      })
    },[])

    const searchFavoritesClicked = (id: number) => {
        const clicked = searchFav.some((results: Result) => results.id === id);
        return clicked;
    }
  

    const onChange= (e: any)=>{
     e.preventDefault()
     setSearchInput(e.target.value)
    }
    const onSubmit =(e: any)=>{
     e.preventDefault()
     const fetch = async () =>{
       try{
         const res =await getSearchMovies(searchInput);
         setSearchResults(res.data.results)
       } catch (err){
  
       }
     
     }
     fetch()
   }
      return (
        <div className="SearchMovie">
        
          <form className="searchForm">
      <input className= "searchInput" onChange={(e)=> onChange(e)}/>
       <button className= "searchButton" onClick={(e)=> onSubmit(e)}>Search</button>
      </form>
        
      <div className="movie-list">
      {results.map((results)=>{
        return(
          <div className='movie-card'>
            <p className ="image">
              <img 
              src={`https://image.tmdb.org/t/p/w1280${results.poster_path}`}
              alt= {results.title}
              />
            </p>
            <p className="movie-title">{results.title}</p>

            <div className="overlay">
            {searchFavoritesClicked(results.id) ? (
            <button className="fav-btn" onClick={() => removeSearchFav(results.id)}>
              <BsFillStarFill /> Remove From Favorites
            </button>
            ) : (
            <button className="fav-btn" onClick={() => addSearchFav(results)}>
              <BsStar /> Add to Favorites
            </button>
            )}
          </div>
        </div>
        )
      })}
      </div>
      
        
  
        
        
        </div>
      )};
  
    
    export default SearchMovie;