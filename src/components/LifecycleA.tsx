import React, { Component } from 'react'
import { LifecycleB } from './LifecycleB'

export class LifecycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Mohsin'
    }
    console.log("LifecycleA - constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA - getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifecycleA - componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleA - shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA - getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA - componentDidUpdate")
  }

  changeState = () => {
    this.setState({
      name: 'Mohsin'
    })
  }
  render() {
    console.log("LifecycleA - render")
    return (
      <>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </>
    )
  }
}
