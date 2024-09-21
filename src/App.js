import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/Todo/Todo";
import "./App.css"

export default function App() {
  return (
    <>
      <AddTodo />
      <Todo />
    </>
  );
}
