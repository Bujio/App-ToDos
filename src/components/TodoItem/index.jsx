import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoItem.css";
const TodoItem = ({ text, completed, onComplete, onDelete, complete }) => {
  const { completeTodo } = useContext(TodoContext);

  const handleCompleteClick = () => {
    completeTodo(text);
  };

  return (
    <li className="item">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={handleCompleteClick}
      >
        {!completed ? "🔘" : "✔️"}
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        🗑️
      </span>
    </li>
  );
};

export default TodoItem;
