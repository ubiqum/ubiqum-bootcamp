import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./navigation/NavigationBar"
import Games from "./navigation/Games"
import Home from "./navigation/Home"
import React from 'react';
//import background from "./images/soccerBackground.jpg"
// style={{backgroundImage: `url(${background})`}}

// APP: https://soccer-react-app-7f65c.web.app/

function App() {
  return (
    <Router>
      <NavigationBar className="navbar fixed-bottom .bg-primary"></NavigationBar>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/games' element={<Games />} />  
      </Routes>
    </Router>
  );
}

export default App;
