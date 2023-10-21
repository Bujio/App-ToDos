import { useContext } from "react";
import "../CreateTodo/CreateTodo.css";
import { TodoContext } from "../../context/TodoContext";
const CreateTodo = () => {
  const { openModal, setOpenModal, deleteAllTodos, totalTodos } =
    useContext(TodoContext);

  return (
    <>
      <button className="btn" onClick={() => setOpenModal(!openModal)}>
        CREAR TAREA
      </button>
      {totalTodos === 0 ? (
        ""
      ) : (
        <button className="btn-deleteAll" onClick={deleteAllTodos}>
          BORRAR TODAS
        </button>
      )}
    </>
  );
};

export default CreateTodo;
