import { useCallback, useState } from "react";

type Filter = "all" | "active" | "completed";
export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  date: string;
};
type Todos = Todo[];

export function useToDoListState() {
  const [todos, setTodos] = useState<Todos>([]);
  const [userInput, setUserInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [isEditingTodoId, setIsEditingTodoId] = useState<string | null>(null);

  const changeUserInput = useCallback((newText: string) => {
    setUserInput(newText);
  }, []);

  const createTodo = useCallback(() => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: userInput.trim(),
      isCompleted: false,
      date: new Date().toLocaleString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setUserInput("");
  }, [userInput]);

  const editTodo = useCallback((id: string) => {
    setIsEditingTodoId(id);
  }, []);

  const changeTodoText = useCallback((id: string, newText: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText,
          };
        }
        return todo;
      });
    });
    setIsEditingTodoId(null);
  }, []);

  const toggleIsCompletedTodo = useCallback((item: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return item.id === todo.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
    });
  }, []);

  const deleteTodo = useCallback((item: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return item.id !== todo.id;
      });
    });
  }, []);

  const setFilterAll = useCallback(() => {
    setFilter("all");
  }, []);

  const setFilterActive = useCallback(() => {
    setFilter("active");
  }, []);

  const setFilterCompleted = useCallback(() => {
    setFilter("completed");
  }, []);

  const clearCompletedTodos = useCallback(() => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return !todo.isCompleted;
      });
    });
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

  const itemsLeft = todos.filter((todo) => {
    return !todo.isCompleted;
  }).length;

  return {
    todos,
    userInput,
    filter,
    filteredTodos,
    itemsLeft,
    isEditingTodoId,
    changeUserInput,
    createTodo,
    editTodo,
    changeTodoText,
    toggleIsCompletedTodo,
    deleteTodo,
    setFilterAll,
    setFilterActive,
    setFilterCompleted,
    clearCompletedTodos,
  };
}
