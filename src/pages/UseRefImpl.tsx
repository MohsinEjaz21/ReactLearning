import React, { useRef } from 'react';

export const UseRefImpl = (props) => {
  const ref = props.forwardRef;

  const handleClick = () => {
    console.log(ref.current);
    ref.current?.focus()
  }

  console.log("rendering UseRefImpl")
  return (
    <div>
      <label htmlFor="username"></label>
      <input type="text" name="username"
        ref={ref} />
      <button onClick={handleClick}>focusInput</button>
    </div>
  )
}

export const UseRef = () => {

  const ref = useRef<HTMLInputElement>(null);
  console.log("rendering UseRef")
  return (
    <div>
      <UseRefImpl forwardRef={ref} />
    </div>
  )
}