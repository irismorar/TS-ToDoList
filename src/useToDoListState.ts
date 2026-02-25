import { useCallback, useState } from "react";

type Filter = "all" | "active" | "completed";
export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};
type Todos = Todo[];

export function useToDoListState() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState<Todos>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const changeUserInput = useCallback((newText: string) => {
    setUserInput(newText);
  }, []);

  const createTodo = useCallback(() => {
    if (userInput === "") {
      alert("Invalid text!");
      return;
    }
    setTodos((prev) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), text: userInput.trim(), isCompleted: false },
      ];
    });
    setUserInput("");
  }, [userInput]);

  const toggleCompletedTodo = useCallback(
    (item: Todo) => {
      const afterToggle = todos.map((todo) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
      setTodos(afterToggle);
    },
    [todos],
  );

  const deleteTodo = useCallback(
    (item: Todo) => {
      const afterDeleting = todos.filter((todo) => {
        if (item.id !== todo.id) {
          return item;
        }
      });
      setTodos(afterDeleting);
    },
    [todos],
  );

  const clearCompletedTodos = useCallback(() => {
    const afterDeleting = todos.filter((todo) => {
      return !todo.isCompleted;
    });
    setTodos(afterDeleting);
  }, [todos]);

  const setFilterAll = useCallback(() => {
    setFilter("all");
  }, []);

  const setFilterActive = useCallback(() => {
    setFilter("active");
  }, []);

  const setFilterCompleted = useCallback(() => {
    setFilter("completed");
  }, []);

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all": {
        return true;
      }
      case "active": {
        return !todo.isCompleted;
      }
      case "completed": {
        return todo.isCompleted;
      }
      default:
        return;
    }
  });

  const itemsLeft = todos.filter((todo) => !todo.isCompleted).length;

  return {
    userInput,
    todos,
    filter,
    filteredTodos,
    itemsLeft,
    changeUserInput,
    createTodo,
    toggleCompletedTodo,
    deleteTodo,
    clearCompletedTodos,
    setFilterAll,
    setFilterActive,
    setFilterCompleted,
  };
}
