'use client'

import React, { useState } from 'react';
import styles from './page.module.css';

interface Person {
  name: string;
  latitude: string;
  longitude: string;
}

export default function Forms() {
  const [numPersons, setNumPersons] = useState(1);
  const [numPersonsError, setNumPersonsError] = useState(false);
  const [destinationLat, setDestinationLat] = useState("");
  const [destinationLong, setDestinationLong] = useState("");
  const [persons, setPersons] = useState<Person[]>([{ name: '', latitude: '', longitude: '' }]);

  const handleNumPersonasChange = (e: any) => {
    const newNumPersonas = e.target.value;
    setNumPersons(newNumPersonas);
    const newPersonasArray = Array.from({ length: newNumPersonas }, () => ({
      name: '',
      latitude: '',
      longitude: '',
    }));
    setPersons(newPersonasArray);
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
    if (numPersons <= 0) {
      setNumPersonsError(true);
    }


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
            <input
              type="text"
              onChange={(e) => setDestinationLat(e.target.value)}
              value={destinationLat}
              className={styles.inputStyled}
              placeholder={"Latitude"}
            />
            <input
              type="text"
              onChange={(e) => setDestinationLong(e.target.value)}
              value={destinationLong}
              className={styles.inputStyled}
              placeholder={"Longitude"}
            />
          </div>

        </div>

        {persons.length > 0 && (
          <h2 className={styles.titlePersons}> Set the name and the origin for each person </h2>
        )}

        {persons.map((persona, index) => (
          <div key={index} className={styles.formLineRow}>
            <label> #{index + 1} </label>
            <input
              type="text"
              value={persona.name}
              onChange={(e) => handlePersonChange(index, 'name', e.target.value)}
              className={styles.inputStyled}
              placeholder={"Name"}
            />
            <input
              type="text"
              value={persona.latitude}
              onChange={(e) => handlePersonChange(index, 'latitude', e.target.value)}
              className={styles.inputStyled}
              placeholder={"Latitude"}
            />
            <input
              type="text"
              value={persona.longitude}
              onChange={(e) => handlePersonChange(index, 'longitude', e.target.value)}
              className={styles.inputStyled}
              placeholder={"Longitude"}
            />

          </div>
        ))}
      </div>
      <button className={styles.buttonSubmit} onClick={sendJson}>Submit!</button>
    </main>
  );
}
