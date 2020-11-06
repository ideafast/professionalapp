import React from 'react';
import { Cohort } from './features/cohort/Cohort';
import { Patients } from './features/patients/Patients';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cohort />
        <Patients />
      </header>
    </div>
  );
}

export default App;
