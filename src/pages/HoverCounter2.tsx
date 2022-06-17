import React from 'react';

export function HoverCounter2(props) {
  const { count, handleIncrement } = props;
  return (
    <button onMouseOver={handleIncrement}>Hover {count} times</button>
  )
}
