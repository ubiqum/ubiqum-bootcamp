import React from 'react';
import './App.css';
import { Home } from "./components/home.js"
import { Gamedetails, Gameinfo } from "./components/gameinfo.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chatboard } from './components/chat-board.js'
import { faHome, faFutbol, faComment } from '@fortawesome/free-solid-svg-icons';
import { useUserState } from './utilities/firebase.js';
import {
  Routes,
  Route, 
  NavLink,
  useLocation
} from "react-router-dom";
const prefixgamechatboard="/chatboard/";
export default function App() {
  const [user] = useUserState();
  var Actualpathname = useLocation().pathname;
  if (Actualpathname.includes("gamedetails")){
    var gameid=Actualpathname.split('/')[2];
   }
  var chatboardroute=prefixgamechatboard+gameid;
  if (user !== null && Actualpathname.includes("gamedetails")) {
    return (
      <div>
        <Routes>
          <Route path="/gameinfo" element={<Gameinfo />}>           </Route>
          <Route path="/gamedetails/:id" element={<Gamedetails />}> </Route>
          <Route path="/chatboard/:id" element={<Chatboard />}>     </Route>
          <Route path="/" element={<Home />}>                       </Route>
        </Routes>
        <nav className="navbar px-5 fixed-bottom navbar-light bg-light" >
          <NavLink to="/"> <FontAwesomeIcon size="lg" icon={faHome} /> </NavLink>
          <NavLink to="/gameinfo"> <FontAwesomeIcon size="lg" icon={faFutbol} /> </NavLink>
          <NavLink to={chatboardroute}> <FontAwesomeIcon size="lg" icon={faComment} /> </NavLink>
        </nav>
      </div>
    );
  }
  else {
    return (
      <div>
        <Routes>
          <Route path="/gameinfo" element={<Gameinfo />}>           </Route>
          <Route path="/gamedetails/:id" element={<Gamedetails />}> </Route>
          <Route path="/chatboard/:id" element={<Chatboard />}>     </Route>
          <Route path="/" element={<Home />}>                       </Route>
        </Routes>
        <nav className="navbar px-5 fixed-bottom navbar-light bg-light" >
          <NavLink to="/"> <FontAwesomeIcon size="lg" icon={faHome} /> </NavLink>
          <NavLink to="/gameinfo"> <FontAwesomeIcon size="lg" icon={faFutbol} /> </NavLink>
        </nav>
      </div>
    )
  }
}

