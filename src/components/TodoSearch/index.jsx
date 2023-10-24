import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";
import EmptyTodos from "../EmptyTodos";

const TodoSearch = () => {
  const { searchValue, setSearchValue, totalTodos } = useContext(TodoContext);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    searchValue("");
  };
  return (
    <>
      {totalTodos !== 0 ? (
        <input
          placeholder="buscar tarea..."
          className="TodoSearch"
          value={searchValue}
          onChange={handleChange}
        />
      ) : (
       ""
      )}
    </>
  );
};

export default TodoSearch;
