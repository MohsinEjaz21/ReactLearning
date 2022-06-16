import React from 'react'
import { withCounter } from './WithCounter'

function HoverCounter(props) {
  const { count, handleIncrement } = props
  return (
    <button onMouseOver={handleIncrement}>
      Clicked {count} times
    </button>
  )
}

export default withCounter(HoverCounter)
