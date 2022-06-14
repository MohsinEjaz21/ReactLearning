import { Person } from '@src/components/Person'
import IApp from '@src/interfaces'
import React from 'react'

export const NamesList = () => {
  const persons: IApp.Person[] = [
    { name: 'Mohsin', age: 30, skills: ['HTML', 'CSS', 'JS'] },
    { name: 'Kamran', age: 25, skills: ['HTML', 'CSS', 'JS'] },
    { name: 'Ali', age: 20, skills: ['HTML', 'CSS', 'JS'] }
  ]

  const personsJSX = persons.map((person: IApp.Person, index) => {
    return <li key={index}>{<Person {...person} />}</li>
  });

  return (
    <div>{personsJSX}</div>
  )
}
