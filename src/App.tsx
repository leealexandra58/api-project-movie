import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Header from './componets/Header';
import MovieList from './componets/MovieList';
import SearchMovie from './componets/SearchMovie';
// import Filter from './componets/Filter';
// import  SearchMovie from './componets/SearchMovie';
// import FilterMovie from './componets/Filter';


function App() {
  return (
    <div className="App">
      <Router>
        
        <MovieList></MovieList>
      
        
        <Routes>
       
          

   <SearchMovie></SearchMovie> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
