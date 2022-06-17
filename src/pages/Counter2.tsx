import React from 'react';
import { ClickCounter2 } from './ClickCounter2';
import { HoverCounter2 } from './HoverCounter2';

export const Counter2 = () => {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <ClickCounter2 count={count} handleIncrement={handleIncrement} />
      <HoverCounter2 count={count} handleIncrement={handleIncrement} />
    </>
    // <div>Counter2</div>
  )
}

export const Count2Impl = () => {
}