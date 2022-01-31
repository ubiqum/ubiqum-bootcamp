import React from 'react';
import {  Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'

const navbar= () =>{
  return (
    <div>
      <nav className="mobile-nav">
        <div>
        {/* <i className="bi bi-house"></i> */}
          <Link to="/home">HOME</Link>
        </div>
        <div>
          <Link to="/games">GAMES</Link>
        </div>
      </nav>
    </div>
  );
}
export default navbar;