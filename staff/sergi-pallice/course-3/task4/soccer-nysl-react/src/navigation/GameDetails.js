import React from 'react';
import game_data from '../data/game_data.json'
import { Navbar, Nav, Container } from 'react-bootstrap';


const headingStyle = {
   textAlign: "center"
}


const GameDetails = () => {
   return (
     <div>
       <h1 className="container bg-info" style={headingStyle}>Game Details</h1>

       {/* console.log(game.Teams) */}
       {Object.values(game_data.games).map( (game, index) => (
         <div className="container" key={index}>
             <span className="block-example border border-dark">
             {console.log(index)}
             {"Date: " + game.Date}
             {" &   Time: " + game.Times}
             </span>
         </div>
          )
          )}

       {/* {game_data.map(( detail, index )=> {

          console.log(detail.games[0].Teams);

          return (<div className="container" key={index}>
             <h3>Date: {detail.games[index].Date }</h3>
             <p>Teams: {detail.games[index].Teams }</p>
             <p>Location: {     detail.locations.`${detail.games[index].Location}`   }</p>
             <p>Location: {  }</p>
          </div>)
       })} */}

    </div>
    )
 }

export default GameDetails;