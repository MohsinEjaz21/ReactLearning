import React from 'react';

export function ClickCounter2(props) {
  const { count, handleIncrement } = props;
  return (
    <button onClick={handleIncrement}>Clicked {count} times</button>
  )
}
