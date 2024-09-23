import React, { createContext, useEffect, useState } from "react";
import { localData } from "./Constant";
import Todo from "../Todo/Todo";

export const TodoContext = createContext();

export const todoData = {
  todos: [],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(
    JSON.parse(localData.get("tasks") || "[]")
  );
  
    useEffect(() => {
      localData.add("tasks", todo);
    }, [todo]);
  
  function handleAddTodo(description) {
    setTodo([...todo, { description: description, isDone: false }]);
  }
  
  function handleDeleteTodo (description) {
    let todoIndex = todo.findIndex((element) => {
      return element.description === description;
    });
 
    todo.splice(todoIndex, 1);
    setTodo([...todo])
    localData.add("tasks", todo)
  }

  return (
    <TodoContext.Provider value={{ todo, handleAddTodo, handleDeleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
