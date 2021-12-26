import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import { nysl_league, logo_alttext, logo_width } from "../components/home.js";
import logo from '../nysl_logo.svg';
import { SignInButton, useUserState, SignOuButton } from '../utilities/firebase.js'
const page_gamechatboard_header = "Game Board Chat";

export function message_unique_id() {
    return uuidv4()

}
export function Chatboard() {
  const { id } = useParams();
  const [user] = useUserState();
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

   