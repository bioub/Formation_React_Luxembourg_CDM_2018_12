import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {

  state = {
    todos: [{
      id: 1,
      text: 'Acheter du pain',
      done: true,
    }, {
      id: 2,
      text: 'Acheter du lait',
      done: false,
    }],
  };

  handleNewTodo = (todo) => {
    todo.id = this.state.todos[this.state.todos.length-1].id + 1;
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  render() {
    return (
      <div className="App">
        <TodoForm onNewTodo={this.handleNewTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
