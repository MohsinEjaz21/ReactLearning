import React, { PureComponent } from 'react'

export class PureComp extends PureComponent<{ name: string }, {}> {
  render() {
    console.log("PureComponent - render")
    return (
      <>
        <div>PureComponent</div>
        <p>{`Name ${this.props.name}`}</p>
      </>
    )
  }
}
