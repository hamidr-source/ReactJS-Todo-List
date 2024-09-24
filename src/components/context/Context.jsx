import React, { createContext, useEffect, useState } from "react";
import { localData } from "./Constant";

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


  function handleCheckTodo (description) {
    let todoIndex = todo.findIndex((element) => {
      return element.description === description;
    });

    if (todo[todoIndex].isDone) {
      todo[todoIndex].isDone = false
    } else {
      todo[todoIndex].isDone = true
    }
    
    setTodo([...todo])
  }

  return (
    <TodoContext.Provider value={{ todo, handleAddTodo, handleDeleteTodo, handleCheckTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
