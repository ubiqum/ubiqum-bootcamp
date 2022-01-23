import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* <a href="/">Go Back</a> This is fine but it reloads the page everytime we navigate    */} 
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
