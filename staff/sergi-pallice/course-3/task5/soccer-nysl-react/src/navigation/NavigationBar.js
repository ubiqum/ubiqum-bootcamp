import React from 'react';
import {  NavLink } from "react-router-dom";
import { faHome, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar= () =>{
  return (
    
    <Navbar className="navbar fixed-bottom" bg="info">
      <Container>
        <NavLink to="/"><FontAwesomeIcon icon={faHome}/>HOME</NavLink>
        <NavLink to="/games"><FontAwesomeIcon icon={faListUl}/>GAMES</NavLink>
      </Container>
    </Navbar>
    
  );
}
export default navbar;