import React, { Component } from 'react';

interface WelcomeProps {
  name: string;
  children?: any;
}

interface WelcomeState {
  name: string;
  children?: any;
}

export default class WellcomeDump extends Component<WelcomeProps, WelcomeState> {
  constructor(props: WelcomeProps) {
    super(props);
    this.state = { ...props };
  }

  changeName = (name: string) => {
    this.setState({ name });
  }

  render() {
    const { name, children } = this.state;
    return (
      <>
        <h1>
          {name && `Hi ${name}`}
          {!name && 'Hello World'}
        </h1>
        <button onClick={() => this.changeName("Kamran Safdar")} >Change Name</button>
        {children}
      </>
    )
  }
}



export const Welcome = () => {
  return (
    <>
      <WellcomeDump name={'Mohsin Ejaz'} >
        <p>This is the testing paragraph</p>
      </WellcomeDump>
    </>
  )
}