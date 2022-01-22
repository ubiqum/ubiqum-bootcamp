import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const name = "Task Tracker";
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th, 14:30'
        },
        {
            id: 2,
            text: 'Work Meeting',
            day: 'Feb 6th, 10:30'  
        }
    ])
    //Delete Task
    const deleteTask = (id) => {
      console.log('delete task id:', id)
      setTasks(tasks.filter( (task) => task.id !== id ))
    }
    return (
    <div className="container">
      <Header title={name}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;