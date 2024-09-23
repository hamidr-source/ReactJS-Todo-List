import React, { createContext, useEffect, useState } from "react";
import { localData } from "./Constant";

export const TodoContext = createContext();

export const todoData = {
  todos: [],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localData.add("todos", todo);
  }, [todo]);

  function handleAddTodo(description) {
    setTodo([...todo, { id: todo.length + 1, description: description }]);
    console.log(todo);
  }

  return (
    <TodoContext.Provider value={{ todo, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
