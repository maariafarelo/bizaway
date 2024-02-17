'use client'

import React, { useState } from 'react';
import styles from './page.module.css';

interface Person {
  name: string;
  origin: string;
}

export default function Forms() {
  const [numPersons, setNumPersons] = useState(0);
  const [destination, setDestination] = useState("");
  const [persons, setPersons] = useState<Person[]>([]);

  const handleNumPersonasChange = (e: any) => {
    const newNumPersonas = e.target.value;
    setNumPersons(newNumPersonas);
    const newPersonasArray = Array.from({ length: newNumPersonas }, () => ({
      name: '',
      origin: '',
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

  return (
    <main className={styles.main}>
      <div>
        <label>Número de personas:</label>
        <input
          value={numPersons}
          onChange={handleNumPersonasChange}
          type="number"
        />
      </div>
      <div>
        <label>Destinació:</label>
        <input
          type="text"
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
        />
      </div>
      {persons.map((persona, index) => (
        <div key={index}>
          <label>Nombre:</label>
          <input
            type="text"
            value={persona.name}
            onChange={(e) => handlePersonChange(index, 'name', e.target.value)}
          />
          <label>Origen:</label>
          <input
            type="text"
            value={persona.origin}
            onChange={(e) => handlePersonChange(index, 'origin', e.target.value)}
          />
        </div>
      ))}
    </main>
  );
}
