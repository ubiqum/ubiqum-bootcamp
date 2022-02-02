import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./navigation/NavigationBar"
import Games from "./navigation/Games"
import Home from "./navigation/Home"
//import background from "./images/soccerBackground.jpg"
// style={{backgroundImage: `url(${background})`}}

// APP: https://soccer-react-app-7f65c.web.app/

function App() {
  return (
    <div>
    <Router>
      <NavigationBar className="navbar fixed-bottom .bg-primary"></NavigationBar>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/games' element={<Games />} />  
      </Routes>
    </Router>
    </div>
  );
}

export default App;
