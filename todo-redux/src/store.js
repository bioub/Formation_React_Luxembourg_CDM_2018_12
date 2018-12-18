import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducers';
import thunk from 'redux-thunk'

const preloadedState = {
  loading: false,
  newTodo: 'Acheter de',
  todos: [
    { id: 123, text: 'Faire des courses', done: true },
    { id: 564, text: 'Acheter du pain', done: false },
  ]
};


export const store = createStore(
  reducer,
  // preloadedState,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
