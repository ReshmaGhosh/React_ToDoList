import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // Check for uniqueness of todo title
    if (!todos.find((existingTodo) => existingTodo.title === todo.title)) {
      setTodos([...todos, todo]);
    } else {
      alert("Title should be unique");
    }
  };

  const deleteTodo = (title) => {
    setTodos(todos.filter((todo) => todo.title !== title));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
