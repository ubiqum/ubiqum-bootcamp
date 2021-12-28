import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import { nysl_league, logo_alttext, logo_width } from "../components/home.js";
import logo from '../nysl_logo.svg';

import { SignInButton, useUserState, SignOuButton } from '../utilities/firebase.js'
import {game_info,game_locations,label_game_details} from '../components/gameinfo.js'
const page_gamechatboard_header = "Game Board Chat";

export function message_unique_id() {
    return uuidv4()

}

export function Chatboard() {
  const { id } = useParams();
  const [user] = useUserState();
  let gametodisplay = game_info.find(game => game.id === id);
var game_location_temp = game_locations[gametodisplay.Location][0].name_location;
var game_location_address_temp = game_locations[gametodisplay.Location][0].address;
  return <div>
          <div className="btn-toolbar justify-content-between">
         <div>
            <h5> <img src={logo} alt={logo_alttext} width={logo_width} /> {nysl_league.title}</h5>
         </div>
         <div>
            {user ? <SignOuButton /> : <SignInButton />}
         </div>
          
          
          </div>
          <p> {page_gamechatboard_header} "Game ID" {id} </p>
          <table className="table">
         <tbody>
            <tr><td>{label_game_details[0].label_date}</td><td>{gametodisplay.Date}</td></tr>
            <tr><td>{label_game_details[0].label_time}</td><td>{gametodisplay.Times}</td></tr>
            <tr><td>{label_game_details[0].label_location}</td><td>{game_location_temp}</td></tr>
            <tr><td>{label_game_details[0].label_address}</td><td>{game_location_address_temp}</td></tr>
            <tr><td>{label_game_details[0].label_team}</td><td>{gametodisplay.Teams}</td></tr>
         </tbody>
      </table>
          </div>
            }

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
   }
toTimestamp(randomDate(new Date(2012, 0, 1), new Date()))
export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

   