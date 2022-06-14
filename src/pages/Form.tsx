import IApp from '@src/interfaces'
import React, { Component } from 'react'

export class Form extends Component<{}, IApp.Form> {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  // generic method to handle any change in the form
  handleChange = (e: any) => {
    const { name, value } = e.target
    this.setState({ [name]: value } as any)
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    alert(JSON.stringify(this.state, null, 2))
  }

  render() {
    const { username, comments, topic } = this.state
    return (
      <div>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <div>Form Component</div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username"></label>
            <input type="text" name="username"
              value={username}
              onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="comments">Comments</label>
            <textarea name="comments" value={comments} onChange={this.handleChange}
              cols={50} rows={30} defaultValue={""} />
          </div>

          <div>
            <label htmlFor="topic">Topic</label>
            <select name="topic" value={topic} onChange={this.handleChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
              <option value="ember">Ember</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
