import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navbar"
import Dogs from "./navigation/Dogs"
import Home from "./navigation/Home"

import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'


// function App() {
//   return (
//     <div className="container">
//       <header>Home</header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Navbar className="navbar fixed-bottom" />
//       <Button />
//       <Routes>
//         <Route path='/dogs' component={Dogs} />
//         <Route path='/cats' component={Cats} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar className="container">
      </Navbar>
      {/* <Button>Test</Button> */}
      <Routes>
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
