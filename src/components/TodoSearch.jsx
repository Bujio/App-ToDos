import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";

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
          type="text"
          placeholder="buscar tarea..."
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
