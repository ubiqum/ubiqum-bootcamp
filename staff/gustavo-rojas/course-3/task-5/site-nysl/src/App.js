import React from 'react';
import logo from './nysl_logo.svg';
import './App.css';
import { nysl_league, logo_alttext, logo_width,Home} from "./components/home.js"
import { Gamedetails, Gameinfo } from "./components/gameinfo.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Chatboard} from './components/chat-board.js'
import { faHome, faInfoCircle, faRuler, faEnvelope, faFutbol, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} >            </Route>
          <Route path="/regform" element={<Regform />}>             </Route>
          <Route path="/rules" element={<Rules />} >                </Route>
          <Route path="/about" element={<About />}>                 </Route>
          <Route path="/gameinfo" element={<Gameinfo />}>           </Route>
          <Route path="/gamedetails/:id" element={<Gamedetails />}> </Route>
          <Route path="/chatboard/:id" element={<Chatboard />}>     </Route>
          <Route path="/" element={<Home />}>                       </Route>
        </Routes>
     
      <nav className="navbar px-5 fixed-bottom navbar-light bg-light" >
        <Link to="/"> <FontAwesomeIcon size="lg" icon={faHome} /> </Link>
        <Link to="/gameinfo"> <FontAwesomeIcon size="lg" icon={faFutbol} /> </Link>
        <Link to="/rules"><FontAwesomeIcon size="lg" icon={faRuler} /></Link>
        <Link to="/contact"><FontAwesomeIcon size="lg" icon={faEnvelope} /></Link>
        <Link to="/regform"><FontAwesomeIcon size="lg" icon={faUserPlus} /></Link>
        <Link to="/about"><FontAwesomeIcon size="lg" icon={faInfoCircle} /> </Link>
      </nav>
    </BrowserRouter>
  );
}



function About() {
  return <div>
    <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> {nysl_league.title}</h5>
    <h5>About</h5>
  </div>
}

function Rules() {
  return <div>
    <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> {nysl_league.title}</h5>
    <h5>Rules and Policies </h5>
  </div>
}

function Regform() {
  return <div>
    <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> {nysl_league.title}</h5>
    <h5>Registration</h5>
  </div>
}

function Contact() {
  return <div>
    <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> {nysl_league.title}</h5>
    <h5>Contact</h5>
  </div>
}