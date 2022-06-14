import React from 'react';

export const FunctionClick = () => {
  function clickHandler() {
    console.log('Button Clicked');
  }
  return (
    <>
      <div>FunctionClick</div>
      <button onClick={clickHandler} >Click</button>

    </>
  )
}
