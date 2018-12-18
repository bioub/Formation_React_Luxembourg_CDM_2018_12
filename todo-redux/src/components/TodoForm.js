import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { selectNewTodo } from '../selectors';
import { todoChange, todoAdd } from '../actions';

class TodoForm extends Component {

  static propTypes = {
    text: PropTypes.string
  };

  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.props.text)}>
        <input type="checkbox" />
        <input name="todo" value={this.props.text} onChange={this.props.handleChange}/>
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

const mapDispatchToProps = (dispatch, ow) => ({
  handleSubmit: (event, text) => {
    event.preventDefault();
    dispatch(todoAdd({text, done: false}));
  },
  handleChange: (event) => {
    dispatch(todoChange(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);