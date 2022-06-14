import React, { Component } from 'react'
import { PureComp } from './PureComp'
import { RegComp } from './RegComp'

export class ParentComp extends Component<{}, { name: string }>  {
  interval: any
  constructor(props) {
    super(props)

    this.state = {
      name: 'Mohsin'
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ name: 'Mohsin' })
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  // * open ParentComp route
  // * See the logs 
  // * the ParentComp and RegularComp renders again after certain interval
  // * but the PureComp doesnot as it has implemented shouldComponentUpdate lifecycle with shallow comparison 
  //   of state and props

  render() {
    console.log("******* ParentComp - render *******")
    return (
      <>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <div>ParentComp</div>
      </>
    )
  }
}