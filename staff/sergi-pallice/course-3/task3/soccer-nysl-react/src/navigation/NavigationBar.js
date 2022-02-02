import React from 'react';
import {  NavLink } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHome,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const navbar= () =>{
  return (
    <div>
      <nav className="mobile-nav">
        <div className="alarm">
        {/* <i className="bi bi-house"></i> */}
          <NavLink to="/home"><FontAwesomeIcon size="lg" icon={faCalendarAlt} color="darkgrey" /></NavLink>
        </div>
        <div>
          <NavLink to="/games">GAMES</NavLink>
        </div>
      </nav>
    </div>
  );
}
export default navbar;