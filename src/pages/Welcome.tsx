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
  state: Readonly<WelcomeState>;

  constructor(props: WelcomeProps) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <>
        <h1>
          {this.props.name && `Hi ${this.props.name}`}
          {!this.props.name && 'Hello World'}
        </h1>
        {this.props?.children}
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