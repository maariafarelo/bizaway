'use client'

import React, { useState } from 'react';
import styles from './page.module.css';

interface Person {
  latitude: string;
  longitude: string;
}

export default function Forms() {
  const [numPersons, setNumPersons] = useState(1);
  const [destinationLat, setDestinationLat] = useState("");
  const [destinationLong, setDestinationLong] = useState("");
  const [persons, setPersons] = useState<Person[]>([{ latitude: '', longitude: '' }]);

  const handleNumPersonasChange = (e: any) => {
    const newNumPersonas = e.target.value;
    setNumPersons(newNumPersonas);
    const newPersonasArray = Array.from({ length: newNumPersonas }, () => ({
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
    const data = {
      numPersons,
      destination: {
        latitude: destinationLat,
        longitude: destinationLong,
      },
      persons,
    };
    console.log(data);
  }

  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <div className={styles.formLine}>
          <label> Introduce el número de personas que va a viajar </label>
          <input
            value={numPersons}
            onChange={handleNumPersonasChange}
            type="number"
            className={styles.inputStyled}
          />
        </div>

        <div className={styles.formLine}>
          <label> Introduce el Aeropuerto de destino (Latitud i Longitud) </label>
          <div className={styles.formLineRow}>
            <input
              type="text"
              onChange={(e) => setDestinationLat(e.target.value)}
              value={destinationLat}
              className={styles.inputStyled}
              placeholder={"Latitud"}
            />
            <input
              type="text"
              onChange={(e) => setDestinationLong(e.target.value)}
              value={destinationLong}
              className={styles.inputStyled}
              placeholder={"Longitud"}
            />
          </div>

        </div>

        {persons.length > 0 && (
          <h2 className={styles.titlePersons}> ¿Desde donde van a salir los que van a viajar? </h2>
        )}

        {persons.map((persona, index) => (
          <div key={index} className={styles.formLineRow}>
            <label> Persona {index + 1} </label>
            <input
              type="text"
              value={persona.latitude}
              onChange={(e) => handlePersonChange(index, 'latitude', e.target.value)}
              className={styles.inputStyled}
              placeholder={"Latitud"}
            />
            <input
              type="text"
              value={persona.longitude}
              onChange={(e) => handlePersonChange(index, 'longitude', e.target.value)}
              className={styles.inputStyled}
              placeholder={"Longitud"}
            />

          </div>
        ))}
      </div>
      <button className={styles.buttonSubmit} onClick={sendJson}>Submit!</button>
    </main>
  );
}
