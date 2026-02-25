import type { Todo } from "./useToDoListState";

type Props = {
  todo: Todo;
  handleDeleteTodo: (argument: Todo) => void;
  handleToggleCompletedTodo: (argument: Todo) => void;
};

export function ToDoListItem({
  todo,
  handleToggleCompletedTodo,
  handleDeleteTodo,
}: Props) {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          key={todo.id}
          checked={todo.isCompleted}
          onChange={() => handleToggleCompletedTodo(todo)}
        />
        <label
          htmlFor={todo.id}
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
            opacity: todo.isCompleted ? ".4" : "1",
          }}
        >
          {todo.text}
        </label>
      </div>
      <button
        className="delete-todo-button"
        onClick={() => handleDeleteTodo(todo)}
      >
        ❌
      </button>
    </li>
  );
}
