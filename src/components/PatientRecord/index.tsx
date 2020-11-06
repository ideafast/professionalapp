import React from 'react';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from './styles.module.css';

export default function PatientRecord(props: any) {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          {props.children}  
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className={styles.patientRecord}>
          I AM A PATIENT
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
