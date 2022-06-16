// higher order component withCounter
import React from 'react';

export const withCounter = (WrappedComponent, incrementValue = 1) => {
  return (props) => {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
      setCount((prevCount) => prevCount + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        handleIncrement={handleIncrement}
        {...props} />
    );
  };
}