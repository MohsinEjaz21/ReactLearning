import React from 'react';

export const ChildComponent = (props) => {
  const { greetParent } = props;
  return (
    <button onClick={greetParent}>GreetParent</button>
  )
}
