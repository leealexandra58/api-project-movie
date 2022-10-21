import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './componets/Search';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
    <Search></Search>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
