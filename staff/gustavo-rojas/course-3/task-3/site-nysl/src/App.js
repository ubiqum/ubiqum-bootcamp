import React from 'react';
import logo from './nysl_logo.svg';
import './App.css';
import {nysl_league,sport_events} from "./components/home.js"

function App() {
  return (
    <div>
    
    <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
    <ul>
        {sport_events.map(sport_event => {
          return (
          <li>{sport_event.s_event_date} - {sport_event.s_event_title}</li>
          )
        })}
      </ul>
  </div>
   
  );
}

export default App;
