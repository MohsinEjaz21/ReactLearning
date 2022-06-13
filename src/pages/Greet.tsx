import React from 'react';

export const GreetDump = (props) => {
  const { name, children } = props;
  return (
    <>
      <h1>
        {name && `Hi ${name}`}
        {!name && 'Hello World'}
      </h1>
      {children}
    </>
  )
}

export const Greet = () => {
  return (
    <>
      <GreetDump name={'Mohsin Ejaz'} >
        <p>This is the testing paragraph</p>
      </GreetDump>
      <GreetDump name={'Sajjad'} />
      <GreetDump />
    </>
  )
}