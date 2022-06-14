import React from 'react'

export const Child = (props) => {
  const { greetingHandler } = props
  return (
    <button onClick={() => { greetingHandler('Mohsin') }}>Say Greeting to parents .. see logs</button>
  )
}
