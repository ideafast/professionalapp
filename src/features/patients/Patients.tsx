import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUserIDs,
  selectPatients,
} from './patientsSlice';
import styles from './Patients.module.css';
import PatientRecord from '../../components/PatientRecord';

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

  const userList = users.map((userID, i) =>
    <PatientRecord key={`user-${i}`}>{userID}</PatientRecord>
  );

  return (
    <div className={styles.patients}>
      <div className={styles.inventoryUsersHeading}>INVENTORY USERS LIST</div>
      <ul>{userList}</ul>
    </div>
  );
}
