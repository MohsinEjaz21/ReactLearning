import { Component } from 'react'

interface IUserGreetingState {
  isLoggedIn: boolean
}
export class UserGreeting extends Component<{}, IUserGreetingState> {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    /* a. using if else statement */
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>Welcome Mohsin</div>
    //   )
    // } else {
    //   return (
    //     <div>Welcome Guest</div>
    //   )
    // }

    /* b.Element variables */
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Mohsin</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return (message)

    /* c. Ternary conditional operator */
    // return this.state.isLoggedIn ?
    //   <div>Welcome Mohsin</div> :
    //   <div>Welcome Guest</div>

    /* d.Short circuit operator */
    return this.state.isLoggedIn && <div>Welcome Mohsin</div>
  }
}

