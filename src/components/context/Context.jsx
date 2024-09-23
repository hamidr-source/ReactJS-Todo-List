import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const todoData = {
  todos: [],
};

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(todoData.todos);


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
