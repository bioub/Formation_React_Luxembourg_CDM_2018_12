import { TODO_CHANGE, TODO_ADD, TODO_RECEIVED, TODO_FETCHING } from "./constants";
import { combineReducers } from "redux";

export const newTodoReducer = (previousState = '', {type, payload}) => {
  switch (type) {
    case TODO_CHANGE:
      return payload;
    default:
      return previousState;
  }
}

export const loadingReducer = (previousState = false, {type}) => {
  switch (type) {
    case TODO_FETCHING:
      return true;
    case TODO_RECEIVED:
      return false;
    default:
      return previousState;
  }
};

export const todosReducer = (previousState = [], {type, payload}) => {
  switch (type) {
    case TODO_ADD:
      const id = previousState.reduce((todo, acc) => todo.id > acc ? todo.id : acc, 0).id + 1;
      const todo = {...payload, id}
      return [...previousState, todo];
    case TODO_RECEIVED:
      return payload;
    default:
      return previousState;
  }
}

export const reducer = combineReducers({
  newTodo: newTodoReducer,
  todos: todosReducer,
  loading: loadingReducer,
})