import { useState } from "react";
import type { Todo } from "./useToDoListState";

type Props = {
  todo: Todo;
  isEditingTodo: boolean;
  handleToggleIsCompleted: (todo: Todo) => void;
  handleDeleteTodo: (todo: Todo) => void;
  handleEditTodo: (id: string) => void;
  handleChangeText: (id: string, newText: string) => void;
};

export function TodoListItem({
  todo,
  isEditingTodo,
  handleToggleIsCompleted,
  handleDeleteTodo,
  handleEditTodo,
  handleChangeText,
}: Props) {
  const [newText, setNewText] = useState("");

  return (
    <li onDoubleClick={() => handleEditTodo(todo.id)}>
      {isEditingTodo ? (
        <input
          value={newText}
          className="edit-todo-input"
          onChange={(event) => setNewText(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter" && newText.trim() !== "") {
              handleChangeText(todo.id, newText);
            }
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.isCompleted}
            onChange={() => handleToggleIsCompleted(todo)}
          />
          <label htmlFor={todo.id}>{todo.text}</label>
          <div className="creation-date"> {todo.date}</div>
          <button
            className="delete-todo-button"
            onClick={() => handleDeleteTodo(todo)}
          >
            ❌
          </button>
        </>
      )}
    </li>
  );
}
