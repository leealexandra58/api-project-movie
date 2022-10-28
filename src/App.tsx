import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './componets/Search';
import { BrowserRouter as Router, Route, Routes, useLocation, useSearchParams} from 'react-router-dom'
import Header from './componets/Header';
import MovieList from './componets/MovieList';
import MovieDisplay from "./componets/MovieDisplay";
 
 
function App() {
 
  return (
    <div className="App">
      <Router>
       
        <Header></Header>
        <Routes>
          <Route path="/" element={<MovieList/>}/>
          <Route path="/moviedisplay/:id" element={<MovieDisplay />}/>
         
  {/* <Search></Search> */}
      </Routes>
    </Router>
    </div>
  );
}
 
export default App;