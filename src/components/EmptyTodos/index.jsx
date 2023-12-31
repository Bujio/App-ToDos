import "./EmptyTodos.css";
import lapiz from "../../lapiz.png";
const EmptyTodos = () => {
  return (
    <div className="empty-flex">
      <img className="img-empty" src={lapiz} alt="img-lapiz" />
      <p className="p-empty">No existen tareas </p>
    </div>
  );
};

export default EmptyTodos;
