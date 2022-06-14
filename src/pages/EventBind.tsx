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
    // ⚠️ "'this' keyword is undefined" 
    // if NOT using arrow function as method
    // if NOT using anonymous arrow function in render
    // OR not using bind in constructor
    this.setState({ message: 'Good bye' })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        // * ⛔️ this will rerender and performance issue if children elements present
        // SOLUTION_1 ⛔️:
        {/* <button onClick={this.handleClick.bind(this)}>Change Message</button> */}

        // * using arrow function in render will fix issue of 'this' keyword
        // * ⛔️ this also may have perfomance implication in some scenarios
        // SOLUTION_2 ✅: use arrow function in render
        {/* <button onClick={() => this.handleClick()}>Change Message</button> */}

        // ==== ERROR "This key word is undefined" =====
        // SOLUTION_3 ✅: use arrow function
        {/* handleClick = () => { } */}

        // SOLUTION_4 ✅: use bind in constructor
        {/* this.handleClick = this.handleClick.bind(this) */}
        // * using bind In constructor will fix issue of 'this' keyword


        {/* using approch 4 > 3 > 2 */}
        <button onClick={this.handleClick}>Change Message</button>

      </div>
    )
  }
}


