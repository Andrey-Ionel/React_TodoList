import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import "./listTodos.css";

export function ListTodos({ todos, toggleTodo, removeTodo, updateTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, id) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          id={todo.id}
          completed={todo.completed}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
