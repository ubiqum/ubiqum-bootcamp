import React from 'react';
import game_data from '../data/game_data.json'


//game_data.games[0].Location

const headingStyle = {
   textAlign: "center"
}

const Games = () => {
   return (
     <div>
       <h1 className="container bg-info" style={headingStyle}>Game Info</h1>
       <h2><em>Fall Schedule</em></h2>
       <p>*All games take place on Saturday</p>
       {game_data.map(( detail, index )=>{
          console.log(detail.locations.Katzenmaier);
          return (<div className="container" key={index}>
             <h3>Date: {detail.games[index].Date}</h3>
             <p>Teams: {detail.games[index].Teams}</p>
             <p>Location: { detail.locations.Katzenmaier.full_name}</p>
          </div>)
       })}
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

