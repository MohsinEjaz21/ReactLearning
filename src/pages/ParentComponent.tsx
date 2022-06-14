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
    this.greetHandler = this.greetHandler.bind(this);
  }

  greetHandler(childName: string) {
    // use template literal to print out message
    console.log(`Hello ${this.state.parentName} From ${childName}`);
  }

  render() {
    return (
      <>
        <div>Parent Component</div>
        {/* See your console log to see the clicks of child accessing parent message */}
        <ChildComponent greetHandler={this.greetHandler} />
      </>
    )
  }
}
