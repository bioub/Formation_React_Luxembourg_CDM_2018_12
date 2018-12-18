import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { selectTodos, selectTodoCount, selectLoading } from '../selectors';
import { fetchTodos } from '../api';
import { todoReceived, todoFetch } from '../actions';

class TodoList extends PureComponent {

  /* equivalent à PureComponent
  shouldComponentUpdate(nextProps) {
    return nextProps.todos !== this.props.todos;
  }
  */

  /*
  componentDidMount() {
    // voir axios
    
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todos) => {

      })
  }
  */
  
  componentDidMount() {
    if (this.props.todos.length) {
      return;
    }
    this.props.dispatch(todoFetch());
  }

  render() {
    const todoItems = this.props.todos.map((t) => <TodoItem key={t.id} todo={t} />);

    return (
      <>
        {this.props.loading && <img src="https://thumbs.gfycat.com/JointRevolvingAntelopegroundsquirrel-size_restricted.gif" />}
        {todoItems}
        <div>{this.props.todoCount} todo(s)</div>
      </>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool,
  })),
  todoCount: PropTypes.number,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
  todoCount: selectTodoCount(state),
  loading: selectLoading(state),
})

export default connect(mapStateToProps)(TodoList);