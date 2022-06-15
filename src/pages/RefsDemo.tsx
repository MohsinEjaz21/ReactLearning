import React, { Component } from 'react';

export class RefsDemo extends Component {
  inputRef: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef.current)
    this.inputRef.current?.focus()
  }

  clickHandler = () => {
    alert(`value :: ${this.inputRef.current?.value}`)
  }

  render() {
    return (
      <>
        <div className='form1' >
          <div className='form1--attr'>
            <label htmlFor="username"></label>
            <input type="text" name="username" placeholder='Enter your name' ref={this.inputRef} />
          </div>
          <button className='form1--attr' onClick={this.clickHandler}>Click</button>
        </div>
      </>
    )
  }
}
