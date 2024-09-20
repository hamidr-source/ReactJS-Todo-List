import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log(todo);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-btn"></button>
    </form>
  );
};

export default AddTodo;
