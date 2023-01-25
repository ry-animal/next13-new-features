import Link from "next/link";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await response.json();
  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </div>
      ))}
    </>
  );
}

export default TodosList;
