import { TODO_CHANGE, TODO_ADD, TODO_RECEIVED, TODO_FETCHING } from "./constants";
import { fetchTodos } from "./api";

// Action suivent le format Flux Standard Action (type + payload)
// redux-actions

export const todoChange = (payload) => ({
  type: TODO_CHANGE,
  payload,
});

export const todoAdd = (payload) => ({
  type: TODO_ADD,
  payload,
});

export const todoReceived = (payload) => ({
  type: TODO_RECEIVED,
  payload,
});

export const todoFetching = () => ({
  type: TODO_FETCHING,
});

export const todoFetch = () => {
  return async (dispatch) => {
    dispatch(todoFetching());
    const todos = await fetchTodos();
    dispatch(todoReceived(todos));
  };
}