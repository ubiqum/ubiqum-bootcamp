// import game_data from '../data/game_data.json'
import SignInOutButton from "../components/SignInOutButton"
import { useData } from "../utilities/firebase"
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { useNavigate } from 'react-router-dom'

const headingStyle = { textAlign: "center" }



const Games = () => {

   const [data, loading, error] = useData('/');
   if (error) return <div>Error: {error.message}</div>;
   if (loading) return <div>Loading data...</div>;
    
   //const navigate = useNavigate()

   function showGameDetails(gameid) {
      window.location.href = "/gamedetails/" + gameid;
   }

   return (
      <div>
        <h1 className="container bg-info" style={headingStyle}><FontAwesomeIcon icon={faListUl}/> Game List</h1>
        <SignInOutButton />
        <h2><em>Fall Schedule</em></h2>
        <p>*All games take place on Saturday</p>
 
        {Object.values(data.games).map( (game, index ) => (
          <div  className="container block-example border border-dark" 
                key={index} 
                onClick={() => showGameDetails(game.id)}>
              {"Date: " + game.Date}
              {" &   Time: " + game.Times}
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

