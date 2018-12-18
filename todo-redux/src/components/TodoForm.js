import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { selectNewTodo } from '../selectors';
import { todoChange, todoAdd } from '../actions';

class TodoForm extends Component {

  static propTypes = {
    text: PropTypes.string
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(todoAdd({text: this.props.text, done: false}));
  };

  handleChange = (event) => {
    this.props.dispatch(todoChange(event.target.value));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="checkbox" />
        <input name="todo" value={this.props.text} onChange={this.handleChange}/>
        <button>+</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  text: selectNewTodo(state),
});

export default connect(mapStateToProps)(TodoForm);