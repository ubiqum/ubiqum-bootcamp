import { useEffect, useState } from 'react';
import exerciseModules from './exercises.json';
import * as solutions from './solutions';
import { resultText, testSolutions } from './testResults';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AccordionCollapse } from 'react-bootstrap';

const resultClass = success => (
  success === true ? 'success' : success === false ? 'failure' : 'not-started'
);

const TextResult = ({value}) => (
  <code>{ resultText(value) }</code>
);

const TestResult = ({result: {call, expected, result, success}}) => (
  <tr className={`test-result ${resultClass(success)}`}>
    <td><code>{call}</code></td>
    <td><TextResult value={expected} /></td>
    {
      success !== undefined && <td><TextResult value={result} /></td>
    }
  </tr>
);

const TestResults = ({name, results, success}) => (
  <Table bordered>
    <thead>
      <tr>
        <th>Call</th>
        <th>Expected Result</th>
        {
          success !== undefined && <th>Your Result</th>
        }
    </tr>
    </thead>
    <tbody>
      { results.map((result, i) => (
          <TestResult key={`${name}-${i}`} result={result} /> 
        ))
      }
    </tbody>
  </Table>
);

const ExerciseResults = ({eventKey, result: {exercise, results, success, data: {given, returns, note}}}) => (
  <Card>
    <Accordion.Toggle as={Card.Header}
      className={`exercise-name ${resultClass(success)}`}
      eventKey={eventKey}>
      {exercise}
    </Accordion.Toggle>
    <AccordionCollapse eventKey={eventKey}>
      <Card.Body>
        <Card.Text>
          Define a function <strong>{exercise}</strong>. It should take {given}.
          It should return {returns}. {note}
        </Card.Text>
        <TestResults name={exercise} results={results} success={success} />
      </Card.Body>
    </AccordionCollapse>
  </Card>
);

// replace markdown style links with HTML links
const replaceLinks = (base, notes) => (
  notes.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (md, text, link) => (
    `<a href="${base}${link}" target="js-help">${text}</a>`
  ))
);

const notesHtml = (base, notes) => ({
  __html: replaceLinks(base, notes)
});

const Reading = ({reading: {title, base, notes = ''}}) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <a href={base} target="js-help">
          {title}
        </a>
      </Card.Title>
      <Card.Text>
        { notes && <span dangerouslySetInnerHTML={notesHtml(base, notes)} /> }
      </Card.Text>
    </Card.Body>
  </Card>
);

const Readings = ({readings}) => (
  !!readings &&
  <div>
    <b>Readings: </b>
    {
      readings.map(reading => <Reading key={reading.id} reading={reading} />)
    }
  </div>
)

const ModuleResults = ({eventKey, result: {module, title, readings, results, success}}) => (
  <Card>
    <Accordion.Toggle as={Card.Header}
      className={`module-title ${resultClass(success)}`}
      eventKey={eventKey}
    >
      {title}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>
        <Readings readings={readings} />
        <Accordion>
          { 
            results.map((result, i) => (
              <ExerciseResults key={result.exercise} result={result}
                eventKey={`${eventKey}e${i}`} 
              />
            )) 
          }
        </Accordion>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

const App = () => {
  // both calls to testSolutions() needed to allow exercises to query 'document' after render
  // on first load and reload 
  const [results, setResults] = useState(() => testSolutions(exerciseModules, solutions));
  const moduleState = useState(null);

  useEffect(() => {
    setResults(testSolutions(exerciseModules, solutions));
  }, []);

  return (
    <Container>
      <h1>LearnJS Exercise Tester</h1>
      <Accordion>
      { 
        results.map((result, i) => (
          result 
          ? <ModuleResults 
              key={result.module} result={result} moduleState={moduleState} 
              eventKey={`m${i}`}
            /> 
          : null
        ))
      }
      </Accordion>
    </Container>
  );
};

export default App;
