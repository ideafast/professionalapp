import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './patientsSlice';
import styles from './Patients.module.css';

export function Patients() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const userList = ['N-DGGHGR', 'E-RRT4D3', 'G-43DS5F'].map((d) =>
    <li>{d}</li>
  )

  return (
    <div className={styles.patients}>
      <div className={styles.inventoryUsersHeading}>INVENTORY USERS LIST</div>
      <ul>{userList}</ul>
    </div>
  );
}
