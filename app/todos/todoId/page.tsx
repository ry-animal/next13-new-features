import { Todo } from "../../../typings";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    next: { revalidate: 60 },
  });

  const todo = await response.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo: Todo = await fetchTodo();

  return (
    <>
      <div className="p-10 bg-yellow-200 border-2 m2 shadow-lg">
        <p>
          #{todo.id}: {todo.title}
        </p>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>

        <p className="border-t border-black mt-5 text-right">
          By User: {todo.userId}
        </p>
      </div>
    </>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await response.json();

  const trimmedTodos = todos.splice(0, 10);
  return trimmedTodos.map((todo) => ({
    userId: todo.id.toString(),
  }));
}
