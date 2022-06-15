import React, { Component } from 'react'

export class Input extends Component {
  inputRef
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusInput() {
    this.inputRef.current?.focus()
  }

  logInChild() {
    console.log("child is logged using parent ref")
  }

  render() {
    return (
      <div>
        <label htmlFor="username"></label>
        <input type="text" name="username"
          ref={this.inputRef} />
      </div>
    )
  }
}


export class FocusInput extends Component {
  componentRef
  constructor(props) {
    super(props)
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    console.log(this.componentRef.current)
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler} >Focus Input</button>
      </div>
    )
  }
}

