import React from 'react';
import logo from './nysl_logo.svg';
import './App.css';
import {nysl_league,sport_events} from "./components/home.js"
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
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </Router>
  );
}

function Home() {
  return <div>
    
  <h5 > <img src={logo} alt="Logo NYSL" width="100" /> { nysl_league.title }</h5>
  <ul>
      {sport_events.map(sport_event => {
        return (
        <li className="list-group-item">{sport_event.s_event_date} - {sport_event.s_event_title}</li>
        )
      })}
    </ul>
</div>
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}