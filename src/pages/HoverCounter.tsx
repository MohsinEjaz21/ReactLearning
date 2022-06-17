import React from 'react'
import { withCounter } from './WithCounter'

function HoverCounterImpl(props) {
  const { count, handleIncrement } = props
  return (
    <button onMouseOver={handleIncrement}>
      Clicked {count} times
    </button>
  )
}

export const HoverCounter = withCounter(HoverCounterImpl)
