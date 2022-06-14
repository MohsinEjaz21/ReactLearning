import React from 'react';

export const ChildComponent = (props) => {
  const { greetHandler } = props;
  return (
    <button onClick={() => greetHandler('child')}>Say Greeting to Parent (see console) </button>
  )
}
