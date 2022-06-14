import IApp from '@src/interfaces';
import React from 'react';


export const Person = (person: IApp.Person) => {
  const personSkills = person.skills
    .reduce((acc, skill) => acc + skill + ',', '')
    .replace(/,\s*$/, "");

  return (
    <div>
      <h1>Name: {person.name}</h1>
      <p>Age: {person.age}</p>
      <p>Skills: {personSkills}</p>
    </div>
  )
}
