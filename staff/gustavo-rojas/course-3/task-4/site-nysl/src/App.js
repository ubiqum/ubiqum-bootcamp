import React from 'react';
import logo from './nysl_logo.svg';
import './App.css';
import {nysl_league,sport_events,page_home_header,logo_alttext,logo_width} from "./components/home.js"
import {Gamedetails,Gameinfo} from "./components/gameinfo.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faInfoCircle,faRuler,faEnvelope,faFutbol,faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/contact">                 <Contact />     </Route>
        <Route path="/regform">                 <Regform />     </Route>
        <Route path="/rules">                   <Rules />       </Route>
        <Route path="/about">                   <About />       </Route>
        <Route path="/gameinfo">                <Gameinfo />    </Route>
        <Route path="/gamedetails/:id">         <Gamedetails /> </Route>
        <Route path="/">                        <Home />        </Route>
      </Switch>
      </div>
      <nav className="navbar fixed-bottom navbar-light bg-light" >
              <NavLink to="/"> <FontAwesomeIcon size="lg" icon={faHome}/> </NavLink>
              <NavLink to="/gameinfo"> <FontAwesomeIcon size="lg" icon={faFutbol}/> </NavLink>
              <NavLink to="/rules"><FontAwesomeIcon size="lg" icon={faRuler}/></NavLink>
              <NavLink to="/contact"><FontAwesomeIcon size="lg" icon={faEnvelope}/></NavLink>
              <NavLink to="/regform"><FontAwesomeIcon size="lg" icon={faUserPlus}/></NavLink>
              <NavLink to="/about"><FontAwesomeIcon size="lg" icon={faInfoCircle}/> </NavLink>
        </nav>
    </Router>
  );
}

function Home() {
  return <div>
    
  <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> { nysl_league.title }</h5>
  <h5>{page_home_header}</h5>
  <ul>
      {sport_events.map(sport_event => {
        return (
        <li  key={sport_event.id} className="list-group-item">{sport_event.s_event_date} - {sport_event.s_event_title}</li>
        )
      })}
    </ul>
</div>
}

function About() {
  return <div>
  <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> { nysl_league.title }</h5>
  <h5>About</h5>
  </div>
}

function Rules() {
  return  <div>
  <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> { nysl_league.title }</h5>
  <h5>Rules and Policies </h5>
  </div>
}

function Regform() {
  return  <div>
  <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> { nysl_league.title }</h5>
  <h5>Registration</h5>
  </div>
}

function Contact() {
  return  <div>
  <h5 > <img src={logo} alt={logo_alttext} width={logo_width} /> { nysl_league.title }</h5>
  <h5>Contact</h5>
  </div>
}