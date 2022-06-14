import React, { Component } from 'react';

export class ClassClick extends Component {

  handleClick() {
    console.log('Class Clicked');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Class Click</button>
    )
  }
}
