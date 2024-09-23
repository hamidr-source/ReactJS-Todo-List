import React, { useContext, useState } from "react";
import { TodoContext } from "../context/Context";
import "./style.css";

const Todo = () => {
  const { todo } = useContext(TodoContext);
  const { handleDeleteTodo } = useContext(TodoContext);
  const { handleCheckTodo } = useContext(TodoContext);

  function checkTodo(e) {
    let todoChecked = e.target.parentElement.children[0].innerHTML;

    handleCheckTodo(todoChecked);
  }

  function deleteTodo(e) {
    let targetElement = e.target.parentElement.children[0].innerHTML;

    handleDeleteTodo(targetElement);
  }

  return (
    <div className="container">
      <div className="todo-list">
        {todo.map((value, index) => (
          <div key={index} className="todo">
            <li className={value.isDone ? "completed-task" : ""}>{value.description}</li>
            <i className="fas fa-check check" onClick={(e) => checkTodo(e)}></i>
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
