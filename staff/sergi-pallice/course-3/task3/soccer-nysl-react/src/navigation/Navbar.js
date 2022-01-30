import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div className="navbar fixed-bottom">
    <li>
      <Link to="/home">HOME</Link>
    </li>
    <li>
      <Link to="/">GAMES</Link>
    </li>
  </div>
  );
}
export default navbar;