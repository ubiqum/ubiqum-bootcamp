import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';


function App() {
  const name = "Task Tracker";
  const [showAddTask, setShowAddTask] = useState(false)  // false=don't show by default
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])  // it's good practice to leave an empty array in the end 
          //in case dependencies are used (like user)

    //Fetch Tasks
    const fetchTasks = async() => {
      // fetch returns a promise, so await "awaits" that promise
      const response = await fetch('http://localhost:5000/tasks')
      const data = await response.json()
      return data
    }
    //Add Task
    const addTask = async (task) => {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      const data = await response.json()
      setTasks([...tasks, data])
      // THE 3 LINES BELOW WERE ONLY USED IN UI WITHOUT BACKEND
      // const id = Math.floor(Math.random() * 10000) + 1
      // const newTask = {id, ...task}
      // setTasks([...tasks, newTask])
    }
    //Delete Task
    const deleteTask = async(id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })

      setTasks(tasks.filter( (task) => task.id !== id ))
    }
    return (
      <Router>
        <div className="container">
          <Header 
            title={name} 
            onAdd={() => setShowAddTask(!showAddTask)} 
            showAdd={showAddTask}
            />
          <Routes>
            <Route path='/' element={
              <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
              </>
              }
              />
            <Route path='/about' element={<About />} />
            </Routes>
          <Footer />
        </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;