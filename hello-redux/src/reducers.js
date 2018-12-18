import { COUNTER_INCREMENT, COLOR_SELECT } from './constants';
import { combineReducers } from 'redux';

/*
const reducer = (previousState = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER': 
      return {
        ...previousState,
        count: previousState.count + 1,
      };
    default: 
      return previousState;
  }
};
*/

export const countReducer = (previousState = 0, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: 
      return previousState + 1;
    default: 
      return previousState;
  }
};

export const colorReducer = (previousState = '', action) => {
  switch (action.type) {
    case COLOR_SELECT: 
      return action.payload;
    default: 
      return previousState;
  }
};

export const reducer = combineReducers({
  counter: countReducer,
  selectedColor: colorReducer,
});