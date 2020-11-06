import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Cohort } from './features/cohort/Cohort';
import { Patients } from './features/patients/Patients';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Cohort View</Link>
            </li>
            <li>
              <Link to='/patients'>Patients View</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/patients'>
            <Patients />
          </Route>
          <Route path='/'>
            <Cohort />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
