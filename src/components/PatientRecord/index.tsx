import React from 'react';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from './styles.module.css';

// NOTE: User typescript interface should be properly expanded out
// interface User {
//   id: string;
// }

export default function PatientRecord(props: any) {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          {props.user.id}  
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className={styles.patientRecord}>
          <div>Location: {props.user.location}</div>
          <div>Status: {props.user.status}</div>
          <div>Devices:
            <ul>
            {props.user.devices.map((device: any, i: number) =>
              <li key={`device-${i}`}>{device}</li>
            )}
            </ul>
          </div>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
