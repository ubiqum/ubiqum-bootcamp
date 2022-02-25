import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./navigation/NavigationBar"
import Games from "./navigation/Games"
import Home from "./navigation/Home"
import GameDetails from "./components/GameDetails"
import Pictures from "./components/Pictures"
//import background from "./images/soccerBackground.jpg"
// style={{backgroundImage: `url(${background})`}}

// APP: https://soccer-react-app-7f65c.web.app/

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/gamedetails/:id' element={<GameDetails />} />
        <Route path='/pictures/:id' element={<Pictures />} />
      </Routes>
    </Router>
  );
}

export default App;
