import React from 'react';
import logo from './nysl_logo.svg';
import './App.css';
import {nysl_league,sport_events} from "./components/home.js"
import {game_info} from "./components/gameinfo.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/contact">
            <Contact />
          </Route>

        <Route path="/regform">
            <Regform />
          </Route>
        <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gameinfo">
            <Gameinfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gameinfo">Game Info</Link>
            </li>
            <li>
              <Link to="/rules">Rules Policies</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/regform">Registration</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    </Router>
  );
}

function Home() {
  return <div>
    
  <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
  <h5>Home</h5>
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
  <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
  <h5>About</h5>;
  </div>
}

function Gameinfo() {
  // console.log(game_info);
  return  <div>
  <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
  <h5>Game Info</h5>
  <table className="table">
  <thead>
  <tr>
    <th>Date</th>
    <th>Teams</th>
    <th>Location</th>
    <th>Times</th>
  </tr>
  </thead>
  <tbody>
      {game_info.map(game => {
        return (
        <tr key={game.id}><td>{game.Date}</td><td>{game.Teams}</td><td>{game.Location}</td><td>{game.Times}</td>
        </tr>
        )
      })}
   </tbody>
    </table>
    
  </div>
}

function Rules() {
  return  <div>
  <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
  <h5>Rules and Policies </h5>;
  </div>
}

function Regform() {
  return  <div>
  <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
  <h5>Registration</h5>;
  </div>
}

function Contact() {
  return  <div>
  <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
  <h5>Contact</h5>;
  </div>
}