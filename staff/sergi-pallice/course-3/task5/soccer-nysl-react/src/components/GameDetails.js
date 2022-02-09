import game_data from "../data/game_data.json";
import { useParams } from "react-router-dom";
import SignInOutButton from "../components/SignInOutButton";
import ChatMessages from "./ChatMessages";
import {useUserState} from '../utilities/firebase.js';

const headingStyle = { textAlign: "center" }

export default function GameDetails() {
    const [user] = useUserState();
    const { id } = useParams();
    var gameToDisplay = game_data.games.find(game => game.id == id);
 
    //const apiKey = "AIzaSyAusue00RkBid1ljE9amVRbXki4mJ_F2Po";
    const API_KEY="AIzaSyD_PVZlhiITxWwbw_tavy_BoJh5PVpyqFY";
    var google_api_url="https://www.google.com/maps/embed/v1/place?q=place_id:";
    var x = gameToDisplay.Location
    var mapURL = game_data.locations[x].google_maps_id
    var mapSource = google_api_url.concat(mapURL,"&key=",API_KEY);

    return (
       <div>
          <div>
            <h1 className="container bg-info" style={headingStyle}>Game Details</h1>
            <SignInOutButton />
            <div>
               {"Date: " + gameToDisplay.Date}<br></br>
               {"Teams: " + gameToDisplay.Teams}<br></br>
               {"Place: " + gameToDisplay.Location}<br></br>
               {"Time: " + gameToDisplay.Times}<br></br>
            </div>
            <iframe title='Game Location Google Maps' loading="lazy" allowFullScreen src={mapSource}></iframe>
          </div>
          <div>
            <h1 className="container bg-info" style={headingStyle}>Chat Messages</h1>
            {user === null ? "Please Sign In to view and send messages" : <ChatMessages />}
          </div>
       </div>
    )
 }