import game_data from '../data/game_data.json'
import { useParams } from "react-router-dom";


const headingStyle = {
    textAlign: "center"
 }


export default function GameDetails() {
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