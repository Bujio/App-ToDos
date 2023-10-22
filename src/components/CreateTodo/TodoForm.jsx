import "./TodoForm.css";
import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Crear tarea</label>
      <textarea
        placeholder="escribe aquí tu nueva tarea..."
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="btn">
          AÑADIR
        </button>
      </div>
    </form>
  );
};

export default TodoForm;