import React from 'react';
import Header from './components/Header';

function App() {
  const name = "Sergi";

  return (
    <div className="container">
      <Header title={name}/>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;