import React from 'react';


const headingStyle = {
  textAlign: "center"
}

const Home = () => {
  return (
    <div>
      <h1 className="container bg-info" style={headingStyle}>Upcoming Events</h1>
      <div className="container">
        <h3>August 4</h3>
        <p>NYSL Fundraiser</p>
        <h3>August 16</h3>
        <p>Season Kick-off: Meet the Teams</p>
        <h3>September 1</h3>
        <p> First Game of the Season (Check Game Schedule for details)</p>
      </div>
    </div>
  );
}
export default Home;