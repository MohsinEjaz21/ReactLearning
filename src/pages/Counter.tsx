import React, { Component } from 'react';

interface CounterState {
  count: number;
}
interface CounterProps { }

export class Counter extends Component<CounterProps, CounterState> {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  // keypoints

  increment = () => {
    // * setState is asynchronus hence useCallback in second parameter
    // * Always make use of setState and never modify the state directly.

    // * increment5 will not work as it is using this.state instead of fn as prev state i.e see [M1] comment
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log(this.state.count);
    // })

    // * increment5 will work as it is using fn as prev state
    // * Try to use previous State to update state
    // **[M1] When you have to update state based on the previous state value, pass in a function as an
    // argument instead of the regular object.
    // * Code has to be executed after the state has been updated ? Place that code in the call back
    // function which is the second argument to the setState method.

    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    }, () => {
      console.log('AFTER INCREMENT 🌈', this.state.count);
    })
  }

  increment5 = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  decrement = () => {
    this.setState((prevState, props) => {
      return { count: prevState.count - 1 }
    }, () => {
      console.log('AFTER DECREMENT 🌈', this.state.count);
    })
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div>Count :: {this.state.count}</div>
        <button onClick={this.increment} >increment</button>
        <button onClick={this.decrement} >decrement</button>
        <button onClick={this.increment5} >increment5</button>
      </div>
    )
  }
}



