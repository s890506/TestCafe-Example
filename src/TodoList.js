import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="header">
          <form onSubmit={this.props.addItem} className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <input
                  className="form-control"
                  placeholder="Task"
                  ref={this.props.inputElement}
                  value={this.props.currentItem.text}
                  onChange={this.props.handleInput}
                />
              </div>
              <button className="btn btn-primary mb-2" type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList