import React, { createContext, useState } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext();

export const todoData = {
  todos: [{ id: 1, description: "" }],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(todoData.todos);
  console.log(todo);

  function handelAddTodo(description) {
    setTodo({
      id: v4(),
      description: description,
    });
  }
  return (
    <TodoContext.Provider value={{ todo , handelAddTodo}}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
