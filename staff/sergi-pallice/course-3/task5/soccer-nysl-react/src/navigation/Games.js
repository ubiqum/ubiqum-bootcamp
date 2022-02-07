import game_data from '../data/game_data.json'

import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';


const headingStyle = {
   textAlign: "center"
}


const Games = () => {

   function showGameDetails(gameid) {
      window.location.href = "/gamedetails/" + gameid;
   }

   return (
     <div>
       <h1 className="container bg-info" style={headingStyle}>Game List</h1>
       <h2><em>Fall Schedule</em></h2>
       <p>*All games take place on Saturday</p>

       {Object.values(game_data.games).map( (game, index) => (
         <div className="container" key={index} onClick={() => showGameDetails(game.id)}>
             <span className="block-example border border-dark">
             {"Date: " + game.Date}
             {" &   Time: " + game.Times}
             </span>
         </div>
          )
          )}

       <div>
       <p><strong>Facility Type:</strong> Outdoor</p>
       <p><strong>Additional Information:</strong> If deemed necessary by NYSL, games may be shortened or cancelled due to extreme weather conditions.</p> 
       <p><strong>Please direct all questions to:</strong> Michael Randall, League Coordinator</p>
      <address>
         <p><strong>Phone:</strong> (630) 690-8132</p>
         <p><strong>Email:</strong> <a href="mailto:michael.randall@chisoccer.org">michael.randall@chisoccer.org</a></p>
      </address>
      </div>
    </div>
    )
 }

export default Games;

