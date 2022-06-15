import React, { Component } from 'react';

export class ForwardRef extends Component {
  inputRef
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current?.focus()
  }
  render() {
    return (
      <>
        {/* pass ref from parent */}
        <ForwardRefChild ref={this.inputRef} />
        <button onClick={this.clickHandler}>FocusInput using ForwardRef</button>

      </>
    )
  }
}

//  use forwardRef to access ref
//  ref cannot be used as prop as it is reserve word
const ForwardRefChild = React.forwardRef<any, any>((props, ref) => {
  return (
    <div>
      <label htmlFor="username"></label>
      <input type="text" name="username"
        ref={ref} />
    </div>
  )
})
