import React, { createContext, useState } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext();

export const todoData = {
  todos: [{ id: 1, description: "" }],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(todoData.todos);

  function handleAddTodo(description) {
    setTodo([...todo, { id: v4(), description: description }]);
  }
  return (
    <TodoContext.Provider value={{ todo, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
