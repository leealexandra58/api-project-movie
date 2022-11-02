import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Header from './componets/Header';
import MovieDisplay from "./componets/MovieDisplay";
import { Movie } from './models/Movie';
import {  getTopRated } from './services/MovieApi';
import SearchMovie from './componets/SearchMovie';
import Header from './componets/Header';
import FavoritePage from './componets/FavoritePage';
// import Filter from './componets/Filter';
// import  SearchMovie from './componets/SearchMovie';
// import FilterMovie from './componets/Filter';import MovieCard from './componets/MovieCard';
import MovieList from './componets/MovieList';
import { Result } from './models/SeachMovie';
 
function App() {
 
  const [topRated, setTopRated] = useState<Movie[]>([]);

 
  useEffect(()=>{
    getTopRated().then((response)=>{
      setTopRated(response.data.results)
    })
  },[]);


  function genreName(genre:number){
    let name = "";

    if(genre === 28){
      name = "Action";
    } else if(genre === 12){
      name = "Adventure";
    } else if(genre === 16){
      name = "Animation";
    } else if(genre === 35){
      name = "Comedy";
    }else if(genre === 80){
      name = "Crime";
    }else if (genre === 99){
      name = "Documentary";
    }else if(genre === 18){
      name = "Drama";
    }else if(genre === 10751){
      name = "Family";
    }else if(genre === 14){
      name = "Fantasy";
    }else if(genre === 36){
      name = "History";
    }else if(genre === 27){
      name = "Horror";
    }else if(genre === 10402){
      name = "Music";
    }else if(genre === 9648){
      name = "Mystery";
    }else if(genre === 10749){
      name = "Romance";
    }else if(genre === 878){
      name = "Science Fiction";
    }else if(genre === 10770){
      name = "TV Movie";
    }else if(genre === 53){
      name = "Thriller";
    }else if(genre === 10752){
      name = "War";
    }else if(genre === 37){
      name = "Western"
    }else{
      name= "genre not found";
    }

    return name
  }
 
  
  return (
    <div className="App">
      <Router>
        
        <Header></Header>
        
      <Routes>
          <Route path="/" element={<MovieList movieList={topRated} genreName={genreName}/>}/>
        <Route path='/search' element={<SearchMovie ></SearchMovie>}/>
        <Route path="/favorites" element={<FavoritePage/>}/>
          <Route path="/moviedisplay/:id" element={<MovieDisplay movieList={topRated} genreName={genreName}/>}/>
      </Routes>

    </Router>
    </div>
  );
}
 
export default App;