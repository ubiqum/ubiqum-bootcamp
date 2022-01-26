//import Banner from './components/Banner'
//import CourseList from './components/CourseList';
import { useState, useEffect } from 'react'


// const firebase = initializeApp(firebaseConfig);
// const database = getDatabase(firebase);

//App link: https://ubiqum-react-scheduler.web.app/

const CourseList = ({ courses }) => (
  <div>
  { Object.values(courses).map(course => <Course key={course.id} course={ course } />) }
  </div>
);

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);

const terms = { F: 'Fall', W: 'Winter', S: 'Spring' };

const getCourseTerm = course => (
  terms[course.id.charAt(0)]
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
);

const Course = ({ course }) => (
  <div className="card m-1 p-2">
    <div className="card-body">
      <div className="card-title">{ getCourseTerm(course) } CS { getCourseNumber(course) }</div>
      <div className="card-text">{ course.title }</div>
    </div>
  </div>
);

// useEffect(() => {
//   const fetchSchedule = async () => {
//     const response = await fetch(url);
//     if (!response.ok) throw response;
//     const json = await response.json();
//     setSchedule(json);
//   }
//   fetchSchedule();
// })

const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses": {
    "F101" : {
      "id" : "F101",
      "meets" : "MWF 11:00-11:50",
      "title" : "Computer Science: Concepts, Philosophy, and Connections"
    },
    "F110" : {
      "id" : "F110",
      "meets" : "MWF 10:00-10:50",
      "title" : "Intro Programming for non-majors"
    },
    "S313" : {
      "id" : "S313",
      "meets" : "TuTh 15:30-16:50",
      "title" : "Tangible Interaction Design and Learning"
    },
    "S314" : {
      "id" : "S314",
      "meets" : "TuTh 9:30-10:50",
      "title" : "Tech & Human Interaction"
    }
  }
};

const App = () => {
  const [schedule, setSchedule] = useState();

  if (!schedule) return <h1>Loading schedule...</h1>;

  return (
    <div className="container">
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </div>
  );
};

export default App;