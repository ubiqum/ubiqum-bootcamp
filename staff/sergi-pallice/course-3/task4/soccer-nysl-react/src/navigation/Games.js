import game_data from '../data/game_data.json'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';


const headingStyle = {
   textAlign: "center"
}

// const clickGame = () => (
//    <button className="btn btn-secondary btn-sm"
//       onClick= {() => showGameDetails()}>
//    </button>
// );


export function GameDetails() {
   const { id } = useParams();
   var gametodisplay = game_data.games.find(game => game.id == id);

   const apiKey = "AIzaSyAusue00RkBid1ljE9amVRbXki4mJ_F2Po";
   const API_KEY="AIzaSyD_PVZlhiITxWwbw_tavy_BoJh5PVpyqFY";
   var google_api_url="https://www.google.com/maps/embed/v1/place?q=place_id:";
   var x = gametodisplay.Location
   var mapURL = game_data.locations.Katzenmaier.google_maps_id
   var mapSource = google_api_url.concat(mapURL,"&key=",API_KEY);


   return (
      <div>
         <h1 className="container bg-info" style={headingStyle}>Game Details</h1>
         {gametodisplay.id}
         {gametodisplay.Date}
         {gametodisplay.Teams}
         {gametodisplay.Location}
         {gametodisplay.Times}
         <iframe title='Game Location Google Maps' loading="lazy" allowFullScreen src={mapSource}></iframe>
      </div>
   )
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

