import React, { Component } from 'react'

interface IErrorBoundaryState {
  error: any
  hasError: boolean
}

interface IErrorBoundaryProps {
  children: React.ReactNode
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      hasError: false
    }
  }

  // static getDerivedStateFromError(error) {
  //   return { hasError: true }
  // }

  // ⛔️ Error handling doenot work for the event handler for that purpose use try catch block.
  componentDidCatch(error, info) {
    // info is used for logging
    this.setState({ error: error.message, hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong. {this.state.error} </h3>
    }
    return (
      this.props.children
    )
  }
}
