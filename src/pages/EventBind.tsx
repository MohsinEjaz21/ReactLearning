import React, { Component } from 'react';

interface EventBindState {
  message
}
// export class EventBind extends Component<Prop, State> {
export class EventBind extends Component<{}, EventBindState> {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello World'
    }
    // 🌈 using arrow function will fix issue of 'this' keyword so no need to bind in constructor
    {/* this.handleClick = this.handleClick.bind(this) */ }

  }

  handleClick = () => {
    console.log('Good bye');
    // ⚠️ "'this' keyword is undefined" if u r not using arrow function or not using bind in constructor
    this.setState({ message: 'Good bye' })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        // * ⛔️ this will rerender and performance issue if children elements present
        {/* <button onClick={this.handleClick.bind(this)}>Change Message</button> */}

        // * using arrow function will fix issue of 'this' keyword
        // * ⛔️ this also may have perfomance implication in some scenarios
        {/* <button onClick={() => this.handleClick()}>Change Message</button> */}

        // ==== ERROR "This key word is undefined" =====
        // SOLUTION_1 ✅: use arrow function
        {/* handleClick = () => { } */}

        // SOLUTION_2 ✅: use bind in constructor
        {/* this.handleClick = this.handleClick.bind(this) */}
        // * using bind In constructor will fix issue of 'this' keyword


        <button onClick={this.handleClick}>Change Message</button>

      </div>
    )
  }
}


