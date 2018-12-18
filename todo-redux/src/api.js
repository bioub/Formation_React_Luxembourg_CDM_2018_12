export const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return todos.map((t) => ({id: t.id, text: t.title, done: t.completed}))
              .slice(0, 10);
}