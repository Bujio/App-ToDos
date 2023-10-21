import "./EmptyTodos.css";
import lapiz from "../../lapiz.png";
const EmptyTodos = () => {
  return (
    <>
      <img src={lapiz} alt="img-lapiz" />
      <p>No existen tareas. Crea tu primera tarea.</p>
    </>
  );
};

export default EmptyTodos;
