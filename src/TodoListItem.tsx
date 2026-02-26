import type { Todo } from "./useToDoListState";

type Props = {
  todo: Todo;
  handleToggleIsCompleted: (argument: Todo) => void;
  handleDeleteTodo: (argument: Todo) => void;
};

export function TodoListItem({
  todo,
  handleToggleIsCompleted,
  handleDeleteTodo,
}: Props) {
  return (
    <li>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.isCompleted}
        onChange={() => handleToggleIsCompleted(todo)}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button
        className="delete-todo-button"
        onClick={() => handleDeleteTodo(todo)}
      >
        ❌
      </button>
    </li>
  );
}
