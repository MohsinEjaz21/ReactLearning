import React from 'react'
import { withCounter } from './WithCounter'

function ClickCounterImpl(props) {
  const { count, handleIncrement } = props
  return (
    <button onClick={handleIncrement}>
      Clicked {count} times
    </button>
  )
}

export const ClickCounter = withCounter(ClickCounterImpl, 5)
