import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Accordion,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  fetchUserIDs,
  selectPatients,
} from './patientsSlice';
import styles from './Patients.module.css';
import PatientRecord from '../../components/PatientRecord';

const createObjectFromUser = (userID: string) => {
  // NOTE: This is only because we can currently only return the ID of a user
  // and to show how the whole user object is passed as a prop to patient record
  // It will likely contain properly formed information like issues, devices etc.
  const devices = ['Axivity', 'VitalPatch'];
  const statuses = ['Not Started', 'Active', 'Completed', 'Withdrawn'];
  let location;
  if (userID.substring(0, 1) === 'N') {
    location = 'Newcastle';
  } else if (userID.substring(0, 1) === 'K') {
    location = 'Kiel';
  } else if (userID.substring(0, 1) === 'E') {
    location = 'Rotterdam';
  } else if (userID.substring(0, 1) === 'G') {
    location = 'Muenster';
  }
  return {
    id: userID,
    devices,
    location,
    status: statuses[Math.floor(statuses.length * Math.random())],
  }
}

export function Patients() {
  const users = useSelector(selectPatients);
  const dispatch = useDispatch();

  const locations = ['All', 'Newcastle', 'Kiel', 'Rotterdam', 'Muenster'];

  const [isInit, setInit] = useState(false);
  const [locationFilter, setLocationFilter] = useState(locations[0]);
  const [idFilter, setIDFilter] = useState('');

  useEffect(() => {
    if (!isInit) {
      dispatch(fetchUserIDs());
      setInit(true);
    }
  }, [isInit, dispatch])

  const getFilteredUsers = () => {
    return users.filter(user => user.includes(idFilter)).filter(user => {
       return locationFilter === locations[0] ||
       (locationFilter === locations[1] && user.substring(0, 1) === 'N') ||
       (locationFilter === locations[2] && user.substring(0, 1) === 'K') ||
       (locationFilter === locations[3] && user.substring(0, 1) === 'E') ||
       (locationFilter === locations[4] && user.substring(0, 1) === 'G');
    });
  }

  return (
    <div className={styles.patients}>
      <div className={styles.inventoryUsersHeading}>PATIENTS</div>
      <input type='text' placeholder='Search IDs' onChange={e => setIDFilter(e.target.value)} />
      <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
        {locations.map((location, i) =>
          <option key={`location-${i}`} value={`${location}`}>{location}</option>
        )}
      </select>
      <Accordion allowMultipleExpanded allowZeroExpanded>
        {getFilteredUsers().map((userID, i) =>
          <PatientRecord key={`user-${i}`} user={createObjectFromUser(userID)} />
        )}
      </Accordion>
    </div>
  );
}
