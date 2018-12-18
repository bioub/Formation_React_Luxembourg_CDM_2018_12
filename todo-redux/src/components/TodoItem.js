import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.todo.done}/>
        {this.props.todo.text}
        <button>-</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool,
  })
};