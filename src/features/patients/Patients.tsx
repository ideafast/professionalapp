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
  return {
    id: userID
  }
}

export function Patients() {
  const users = useSelector(selectPatients);
  const dispatch = useDispatch();

  const [isInit, setInit] = useState(false);

  useEffect(() => {
    if (!isInit) {
      dispatch(fetchUserIDs());
      setInit(true)
    }
  }, [isInit, dispatch])

  return (
    <div className={styles.patients}>
      <div className={styles.inventoryUsersHeading}>PATIENTS</div>
      <Accordion allowMultipleExpanded allowZeroExpanded>
        {users.map((userID, i) =>
          <PatientRecord key={`user-${i}`} user={createObjectFromUser(userID)} />
        )}
      </Accordion>
    </div>
  );
}
