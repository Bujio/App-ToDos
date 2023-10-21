import "./TodoList.css";
const TodoList = ({ children }) => {
  return (
    <div className="body">
      <ul>{children}</ul>
    </div>
  );
};

export default TodoList;
