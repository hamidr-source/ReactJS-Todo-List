import React, { useContext, useState } from "react";
import { TodoContext } from "../context/Context";

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState("");
  const todo = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(todo);
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
