export const selectTodos = (state) => state.todos;
export const selectNewTodo = (state) => state.newTodo;
export const selectLoading = (state) => state.loading;
export const selectTodoCount = (state) => selectTodos(state).length;

// voir aussi reselect (createSelector)
/*
export const selectTodoCount = createSelector(
  selectTodos,
  (todos) => todos.length
);
*/