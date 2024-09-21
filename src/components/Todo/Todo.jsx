import React, { useContext } from "react";
import { TodoContext } from "../context/Context";

const Todo = () => {
  const { todo } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todo.map((value, index) => (
        <div key={index}>{value.description}</div>
      ))}
    </div>
  );
};

export default Todo;
