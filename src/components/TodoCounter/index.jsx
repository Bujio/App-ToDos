import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoCounter.css";
const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <>
      {totalTodos < 1 ? (
        ""
      ) : (
        <>
          <h1 className="h1">
            Has completado: {completedTodos} de {totalTodos}
            <span>
              {}
              {completedTodos === totalTodos && totalTodos !== 0 ? (
                <h2>¡HAS TERMINADO TODAS LAS TAREAS!</h2>
              ) : (
                ""
              )}
            </span>
          </h1>
        </>
      )}
      {}
    </>
  );
};

export default TodoCounter;
