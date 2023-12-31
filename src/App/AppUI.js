import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import TodosLoading from "../components/TodosLoading";
import TodosError from "../components/TodosError";
import EmptyTodos from "../components/EmptyTodos";
import CreateTodo from "../components/CreateTodo/index.jsx";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Modal from "../components/Modal";
import TodoForm from "../components/CreateTodo/TodoForm";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {!openModal ? (
        <>
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodo />
        </>
      ) : (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
