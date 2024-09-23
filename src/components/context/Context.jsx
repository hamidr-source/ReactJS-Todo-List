import React, { createContext, useEffect, useState } from "react";
import { localData } from "./Constant";

export const TodoContext = createContext();

export const todoData = {
  todos: [],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  useEffect(() => {
    localData.add("tasks", todo);
  }, [todo]);

  function handleAddTodo(description) {
    setTodo([...todo, { id: todo.length + 1, description: description }]);
    console.log(todo);
  }

  function handleDeleteTodo(description) {
    let todoIndex = todo.findIndex((element) => {
      return element.description === description;
    });

    todo.splice(todoIndex, 1);
  }

  return (
    <TodoContext.Provider value={{ todo, handleAddTodo, handleDeleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
