import { Component } from 'react';
import { ChildComponent } from './ChildComponent';

interface STATE {
  parentName: string
}

export class ParentComponent extends Component<{}, STATE> {

  constructor(props) {
    super(props)

    this.state = {
      parentName: 'ParentComponent'
    }
    // resolving this keyword undefined inside the greetParent function
    this.greetParentHandler = this.greetParentHandler.bind(this);
  }

  greetParentHandler() {
    // use template literal to print out message
    console.log(`Hello ${this.state.parentName}`)
  }

  render() {
    return (
      <>
        <div>Parent Component</div>
        {/* See your console log to see the clicks of child accessing parent message */}
        <ChildComponent greetParentHandler={this.greetParentHandler} />
      </>
    )
  }
}
