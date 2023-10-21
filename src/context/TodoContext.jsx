import { createContext, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import useLocalStorage from "./useLocalStotage";
const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const deleteAllTodos = () => {
    const newTodos = [];
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        addTodo,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        deleteAllTodos,
        openModal,
        setOpenModal,
      }}
    >
      {loading ? (
        <>
          <p>Cargando...</p>
          <ClipLoader
            color="white"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        children
      )}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
