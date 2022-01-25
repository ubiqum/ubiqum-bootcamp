const CourseList = ({ courses }) => (
    <div>
    { Object.values(courses).map(course => <Course course={ course } />) }
    </div>
  );
export default CourseList
