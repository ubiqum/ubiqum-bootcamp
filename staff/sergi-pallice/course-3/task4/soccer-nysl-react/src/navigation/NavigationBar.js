import React from 'react';
import {  NavLink } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'
// import { FontAwesomeIcon } from "@fontawesome/react-fortawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const navbar= () =>{
  return (
    <div>
      <nav className="mobile-nav">
        <div className="alarm">
        {/* <i className="bi bi-house"></i> */}
          <NavLink to="/home">HOME
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/games">GAMES</NavLink>
        </div>
      </nav>
    </div>
  );
}
export default navbar;