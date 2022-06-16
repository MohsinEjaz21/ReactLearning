import React from 'react'
import { withCounter } from './WithCounter'

function ClickCounter(props) {
  const { count, handleIncrement } = props
  return (
    <button onClick={handleIncrement}>
      Clicked {count} times
    </button>
  )
}

export default withCounter(ClickCounter, 5)
