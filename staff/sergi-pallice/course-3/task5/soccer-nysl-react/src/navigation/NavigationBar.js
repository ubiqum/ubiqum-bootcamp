import React from 'react';
import {  NavLink } from "react-router-dom";
import { faHome, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar= () =>{
  return (
    
    <Navbar className="navbar fixed-bottom" bg="info">
      <Container>
        <NavLink to="/"><h5><FontAwesomeIcon icon={faHome}/>HOME</h5></NavLink>
        <NavLink to="/games"><h5><FontAwesomeIcon icon={faListUl}/>GAMES</h5></NavLink>
      </Container>
    </Navbar>
    
  );
}
export default navbar;