import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/Todo/Todo";
import "./App.css";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";

export default function App() {
  return (
    <>
      <ThemeChanger />
      <AddTodo />
      <Todo />
    </>
  );
}
