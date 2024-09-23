import React, { useContext } from "react";
import { TodoContext } from "../context/Context";
import "./style.css";

const Todo = () => {
  const { todo } = useContext(TodoContext);
  const { handleDeleteTodo } = useContext(TodoContext);

  function deleteTodo(e) {
    let targetElement = e.target.parentElement.children[0].innerHTML;

    handleDeleteTodo(targetElement);
  }

  return (
    <div className="container">
      <div className="todo-list">
        {todo.map((value, index) => (
          <div key={index} className="todo">
            <li>{value.description}</li>
            <i className="fas fa-check check"></i>
            <i
              className="fas fa-trash trash"
              onClick={(e) => deleteTodo(e)}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
