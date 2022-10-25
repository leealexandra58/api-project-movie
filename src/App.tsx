import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './componets/Search';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './componets/Header';
import MovieList from './componets/MovieList';



function App() {
  return (
    <div className="App">
      <Router>
        
        <Header></Header>
        <Routes>
          <Route path="/" element={<MovieList/>}/>
          
  {/* <Search></Search> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
