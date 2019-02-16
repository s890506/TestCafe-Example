import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <div class="alert alert-success" role="alert"
        key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </div>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          {listItems}
        </div>
      </div>
    )
  }
}

export default TodoItems