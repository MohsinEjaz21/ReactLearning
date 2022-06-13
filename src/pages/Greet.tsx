import React from 'react';

export const GreetDump = (props) => {
  const { name } = props;
  return (
    <>
      <h1 >
        {name && `Hi ${name}`}
        {!name && 'Hello World'}
      </h1>
    </>
  )
}

export const Greet = () => {
  return (
    <>
      <GreetDump name={'Mohsin Ejaz'} />
      <GreetDump name={'Sajjad'} />
      <GreetDump />
    </>
  )
}