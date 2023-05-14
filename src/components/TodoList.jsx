import React from "react";

export default function TodoList({ todos, deleteTodo }) {
  const getColor = (status) => {
    switch (status) {
      case "not-started":
        return "red";
      case "in-progress":
        return "blue";
      case "done":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title} style={{ color: getColor(todo.status) }}>
          {todo.title} - {todo.date} - {todo.status}
          <button onClick={() => deleteTodo(todo.title)}> Delete </button>
        </li>
      ))}
    </ul>
  );
}
