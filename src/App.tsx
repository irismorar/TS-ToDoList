import "./App.css";
import { UserInputItem } from "./UserInputItem";
import { useToDoListState } from "./useToDoListState";
import { TodoListItem } from "./TodoListItem";

export default function App() {
  const {
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
  } = useToDoListState();
  return (
    <section className="app-container">
      <h1>TODOS</h1>
      <main>
        <UserInputItem
          inputText={userInput}
          handleChange={changeUserInput}
          handleCreateTodo={createTodo}
        />
        <ul>
          {filteredTodos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                isEditingTodo={isEditingTodoId === todo.id}
                handleToggleIsCompleted={toggleIsCompletedTodo}
                handleDeleteTodo={deleteTodo}
                handleEditTodo={editTodo}
                handleChangeText={changeTodoText}
              />
            );
          })}
        </ul>
      </main>
      {!!todos.length && (
        <footer>
          <section className="items-left">
            {itemsLeft} {itemsLeft <= 1 ? "item" : "items"} left
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
                  filter === "completed" ? "hsla(0,100%,0%,.2)" : "transparent",
              }}
            >
              Completed
            </button>
          </section>
          <div className="clear-completed-button" onClick={clearCompletedTodos}>
            Clear completed
          </div>
        </footer>
      )}
    </section>
  );
}
