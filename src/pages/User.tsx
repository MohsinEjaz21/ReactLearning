import React from 'react'

export const User = (props) => {
  const { render } = props
  return (
    <div>{render(false)}</div>
  )
}
