import React, { useContext, useState } from "react";
import { TodoContext } from "../context/Context";

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

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
