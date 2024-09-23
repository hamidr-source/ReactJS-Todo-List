import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const todoData = {
  todos: [],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(todoData.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    let todoLocalStorage = JSON.parse(localStorage.getItem("todos"))
    console.log(todoLocalStorage)
  })

  console.log(todo)
  function handleAddTodo(description) {
    setTodo([...todo, { id: todo.length + 1, description: description }]);
  }

  return (
    <TodoContext.Provider value={{ todo, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
