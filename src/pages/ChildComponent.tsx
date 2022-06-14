import React from 'react';

export const ChildComponent = (props) => {
  const { greetParentHandler } = props;
  return (
    <button onClick={greetParentHandler}>CHILD will call parent greeting method (see console) </button>
  )
}
