import Banner from './components/Banner'
import CourseList from './components/CourseList';
import { useData } from './utilities/firebase.js';
import { addScheduleTimes } from './components/AddScheduleTimes';


const App = () => {
  const [schedule, loading, error] = useData('/', addScheduleTimes); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>

  return (
    <div className="container">
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </div>
  );
};

export default App;