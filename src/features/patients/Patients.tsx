import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
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
      <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      <ul>{userList}</ul>
    </div>
  );
}
