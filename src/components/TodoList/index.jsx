import "./TodoList.css";
const TodoList = ({ children }) => {
  return (
    <div className="body-list">
      <ul>{children}</ul>
    </div>
  );
};

export default TodoList;
