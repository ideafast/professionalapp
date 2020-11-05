import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUserIDs,
  selectPatients,
} from './patientsSlice';
import styles from './Patients.module.css';

export function Patients() {
  const users = useSelector(selectPatients);
  const dispatch = useDispatch();

  const userList = users.map((userID) =>
    <li>{userID}</li>
  );

  return (
    <div className={styles.patients}>
      <div className={styles.inventoryUsersHeading}>INVENTORY USERS LIST</div>
      <ul>{userList}</ul>
      <button onClick={() => dispatch(fetchUserIDs())}>Fetch Users</button>
    </div>
  );
}
