import React from 'react';
import styles from './styles.module.css';

export default function PatientRecord(props: any) {
  return (
    <li className={styles.patientRecord}>
      {props.children}
    </li>
  );
}
