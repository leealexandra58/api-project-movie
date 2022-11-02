import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Header from './componets/Header';
import MovieList from './componets/MovieList';
import SearchMovie from './componets/SearchMovie';
import { Favorites } from './componets/Favorites';
import Header from './componets/Header';
// import Filter from './componets/Filter';
// import  SearchMovie from './componets/SearchMovie';
// import FilterMovie from './componets/Filter';


function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path='/search' element={<SearchMovie></SearchMovie>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;
