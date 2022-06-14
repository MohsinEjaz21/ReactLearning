import React, { Component } from 'react'

export class RegComp extends Component<{ name: string }, {}>  {
  render() {
    console.log("RegComp - render")
    return (
      <>
        <div>RegComp</div>
        <p>{`Name ${this.props.name}`}</p>
      </>)
  }
}
