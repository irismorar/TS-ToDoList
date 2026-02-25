import "./App.css";
import { UserInputItem } from "./UserInputItem";
import { ToDoListItem } from "./TodoListItem";
import { useToDoListState } from "./useToDoListState";

export default function App() {
  const {
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
  } = useToDoListState();

  return (
    <section>
      <h1>TODOS</h1>
      <section className="user-input-container">
        <UserInputItem
          userInput={userInput}
          handleChangeUserInput={changeUserInput}
          handleCreateTodo={createTodo}
        />
      </section>
      <main>
        <ul>
          {filteredTodos.map((todo) => {
            return (
              <ToDoListItem
                todo={todo}
                key={todo.id}
                handleToggleCompletedTodo={toggleCompletedTodo}
                handleDeleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
        {!!todos.length && (
          <section className="filters-container">
            <section>
              {itemsLeft} {itemsLeft <= 1 ? " item" : " items"} left
            </section>
            <section className="filters">
              <button
                onClick={setFilterAll}
                style={{
                  backgroundColor:
                    filter === "all" ? "hsla(0,100%,0%,.2)" : "transparent",
                }}
              >
                All
              </button>
              <button
                onClick={setFilterActive}
                style={{
                  backgroundColor:
                    filter === "active" ? "hsla(0,100%,0%,.2)" : "transparent",
                }}
              >
                Active
              </button>
              <button
                onClick={setFilterCompleted}
                style={{
                  backgroundColor:
                    filter === "completed"
                      ? "hsla(0,100%,0%,.2)"
                      : "transparent",
                }}
              >
                Completed
              </button>
            </section>
            <button onClick={clearCompletedTodos}>Clear completed</button>
          </section>
        )}
      </main>
    </section>
  );
}
