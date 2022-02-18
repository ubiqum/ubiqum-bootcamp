import game_data from "../data/game_data.json";
import { useData } from "../utilities/firebase"
import { useParams } from "react-router-dom";
import SignInOutButton from "../components/SignInOutButton";
import ChatMessages from "./ChatMessages";
import {useUserState} from '../utilities/firebase.js';
import { faBookOpen, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const headingStyle = { textAlign: "center" }

export default function GameDetails() {

   const [user] = useUserState();
   const { id } = useParams();

   const [data, loading, error] = useData('/');
   if (error) return <div>Error: {error.message}</div>;
   if (loading) return <div>Loading data...</div>;
   // console.log(data.games)

   var gameToDisplay = game_data.games.find(game => game.id === id);
 
    //const apiKey = "AIzaSyAusue00RkBid1ljE9amVRbXki4mJ_F2Po";
    const API_KEY="AIzaSyD_PVZlhiITxWwbw_tavy_BoJh5PVpyqFY";
    var google_api_url="https://www.google.com/maps/embed/v1/place?q=place_id:";
    var x = gameToDisplay.Location
    var mapURL = game_data.locations[x].google_maps_id
    var mapSource = google_api_url.concat(mapURL,"&key=",API_KEY);

    return (
       <div>
          <div>
            <h1 className="container bg-info" style={headingStyle}>
            <FontAwesomeIcon icon={faBookOpen}/> Game Details</h1>
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
            <h1 className="container bg-info" style={headingStyle}>
               <FontAwesomeIcon icon={faComments}/> Chat Messages</h1>
            {user === null ? "Sign In to view and send messages" : <ChatMessages />}
          </div>
       </div>
    )
 }