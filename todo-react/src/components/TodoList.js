import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

export default class TodoList extends PureComponent {

  /* equivalent à PureComponent
  shouldComponentUpdate(nextProps) {
    return nextProps.todos !== this.props.todos;
  }
  */

  render() {
    const todoItems = this.props.todos.map((t) => <TodoItem key={t.id} todo={t} />);

    return (
      <>
        {todoItems}
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
};