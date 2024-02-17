'use client'

import React, { useState } from 'react';
import styles from './page.module.css';

interface Person {
  name: string;
  latitude: string;
  longitude: string;
}

interface PersonErrors {
  name: boolean;
  latitude: boolean;
  longitude: boolean;
}

export default function Forms() {
  const [numPersons, setNumPersons] = useState(1);
  const [numPersonsError, setNumPersonsError] = useState(false);
  const [destinationLat, setDestinationLat] = useState("");
  const [destinationLatError, setDestinationLatError] = useState(false);
  const [destinationLong, setDestinationLong] = useState("");
  const [destinationLongError, setDestinationLongError] = useState(false);
  const [persons, setPersons] = useState<Person[]>([{ name: '', latitude: '', longitude: '' }]);
  const [personErrors, setPersonErrors] = useState<PersonErrors[]>([{ name: false, latitude: false, longitude: false }]);


  const handleNumPersonasChange = (e: any) => {
    const newNumPersonas = e.target.value;
    setNumPersons(newNumPersonas);
    const newPersonasArray = Array.from({ length: newNumPersonas }, () => ({
      name: '',
      latitude: '',
      longitude: '',
    }));
    const newPersonErrorsArray = Array.from({ length: newNumPersonas }, () => ({
      name: false,
      latitude: false,
      longitude: false,
    }));

    setPersons(newPersonasArray);
    setPersonErrors(newPersonErrorsArray);
  };

  const handlePersonChange = (index: any, key: any, value: any) => {
    const updatedPersonas = persons.map((person, i) => {
      if (i === index) {
        return { ...person, [key]: value };
      }
      return person;
    });
    setPersons(updatedPersonas);
  };

  const sendJson = () => {
    let isValid = true;

    if (numPersons <= 0) {
      setNumPersonsError(true);
      isValid = false;
    } else {
      setNumPersonsError(false);
    }

    if (destinationLat === "") {
      setDestinationLatError(true);
      isValid = false;
    } else {
      setDestinationLatError(false);
    }

    if (destinationLong === "") {
      setDestinationLongError(true);
      isValid = false;
    } else {
      setDestinationLongError(false);
    }

    const updatedPersonErrors = persons.map(person => ({
      name: person.name.trim() === '',
      latitude: person.latitude.trim() === '' || !person.latitude.match(/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/),
      longitude: person.longitude.trim() === '' || !person.longitude.match(/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/),
    }));

    // Check if there are any errors in persons
    const hasPersonErrors = updatedPersonErrors.some(errors => errors.name || errors.latitude || errors.longitude);
    if (hasPersonErrors) {
      isValid = false;
    }

    setPersonErrors(updatedPersonErrors);

    if (!isValid) {
      console.log("Validation failed. Please correct the errors before submitting.");
      return;
    } else {
      const data = {
        num_pers: numPersons,
        destination: {
          latitude: destinationLat,
          longitude: destinationLong,
        },
        users: persons,
      };
      console.log(data);
    }
  }

  return (
    <main className={styles.main}>
      <h2 className={styles.title}> Fill with the data of the path to optimize </h2>
      <div className={styles.formContainer}>
        <div className={styles.formLine}>
          <label> How many persons are travelling? </label>
          <input
            value={numPersons}
            onChange={handleNumPersonasChange}
            type="number"
            className={styles.inputStyled}
          />
          {numPersonsError ? <label className={styles.error}> Please enter a valid number </label> : null}
        </div>

        <div className={styles.formLine}>
          <label> Set the Latitude and the Longitude of the destination </label>
          <div className={styles.formLineRow}>
            <div className={styles.errorInput}>
              <input
                type="text"
                onChange={(e) => setDestinationLat(e.target.value)}
                value={destinationLat}
                className={styles.inputStyled}
                placeholder={"Latitude"}
              />
              {destinationLatError ? <label className={styles.error}> Please enter a valid latitude </label> : null}
            </div>
            <div className={styles.errorInput}>
              <input
                type="text"
                onChange={(e) => setDestinationLong(e.target.value)}
                value={destinationLong}
                className={styles.inputStyled}
                placeholder={"Longitude"}
              />
              {destinationLongError ? <label className={styles.error}> Please enter a valid longitude </label> : null}
            </div>
          </div>

        </div>

        {persons.length > 0 && (
          <h2 className={styles.titlePersons}> Set the name and the origin for each person </h2>
        )}

        {persons.map((persona, index) => (
          <div key={index} className={styles.formLineRow}>
            <label> #{index + 1} </label>
            <div className={styles.errorInput}>
              <input
                type="text"
                value={persona.name}
                onChange={(e) => handlePersonChange(index, 'name', e.target.value)}
                className={styles.inputStyled}
                placeholder={"Name"}
              />
              {personErrors[index].name && <label className={styles.error}>Please enter a valid name</label>}
            </div>
            <div className={styles.errorInput}>
              <input
                type="text"
                value={persona.latitude}
                onChange={(e) => handlePersonChange(index, 'latitude', e.target.value)}
                className={styles.inputStyled}
                placeholder={"Latitude"}
              />
              {personErrors[index].latitude && <label className={styles.error}> Please enter a valid latitude </label>}
            </div>
            <div className={styles.errorInput}>
              <input
                type="text"
                value={persona.longitude}
                onChange={(e) => handlePersonChange(index, 'longitude', e.target.value)}
                className={styles.inputStyled}
                placeholder={"Longitude"}
              />
              {personErrors[index].longitude && <label className={styles.error}> Please enter a valid longitude </label>}
            </div>
          </div>
        ))}
      </div>
      <button className={styles.buttonSubmit} onClick={sendJson}>Submit!</button>
    </main>
  );
}
