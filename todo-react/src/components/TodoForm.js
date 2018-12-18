import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoForm extends Component {

  state = {
    text: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNewTodo({...this.state});
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="checkbox" />
        <input name="todo" onChange={this.handleChange}/>
        <button>+</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};