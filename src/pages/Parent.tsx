import React from 'react'
import { Child } from '../components/Child'

export const Parent = () => {

  function sayGreeting(fromName) {
    console.log(`Hello Parent, i am your child ${fromName}!`)
  }

  return (
    <>
      <h1>Parent component</h1>
      <Child greetingHandler={sayGreeting} />
    </>
  )
}
