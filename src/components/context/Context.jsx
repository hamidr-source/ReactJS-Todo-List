import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext();

export const todoData = {
  todos: [{ id: 1, description: "" }],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(todoData.todos);

  function handelAddTodo(description) {
    console.log(todo);
    setTodo({
      id: v4(),
      description: description,
    });
  }
  return (
    <TodoContext.Provider value={{ todo, handelAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
