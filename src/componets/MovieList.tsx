import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getMoviesApi } from "../services/MovieApi"
import { Movie } from "../models/Movie"
import "./MovieList.css"
import { Result } from "../models/SeachMovie";
import { getSearchMovies } from "../services/SearchServices";


export function MovieList() {

  const [movieList, setMovieList] = useState<Movie[]>([])
  const [filter, setFilter] = useState('');
  useEffect(()=>{

    getMoviesApi().then((response)=>{
      console.log(response.data.results);
      const {data} = response
      setMovieList(response.data.results)
    })
  },[])

  const [searchInput, setSearchInput] = useState("")
  const [results, setSearchResults] = useState<Result[]>([])
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
      <div>
      
        <form className="searchForm">
    <input className= "searchInput" onChange={(e)=> onChange(e)}/>
     <button className= "searchButton" onClick={(e)=> onSubmit(e)}>Search</button>
    </form>

    {results.map((results)=>{
      return(
        <div className='MovieList'>
          {results.title}
          <li className ="ResultsList">
            <img className= "Movie Card" 
            src={`https://image.tmbd.org/t/p/w1280${results.poster_path}`}
            alt= {results.title}
            />
          </li>
        </div>
      )
    })}

    
      

      
      
      </div>
    )};

  
  export default MovieList;