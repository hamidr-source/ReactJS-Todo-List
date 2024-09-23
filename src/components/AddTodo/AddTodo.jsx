import React, { useContext, useState } from "react";
import { TodoContext } from "../context/Context";
import "./style.css";

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const { handleAddTodo } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTodo(todoValue);
    setTodoValue("")
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button className="todo-btn">+</button>
    </form>
  );
};

export default AddTodo;
