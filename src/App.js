import React, { useCallback, useState } from "react";
import "./styles.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { ListTodos } from "./components/ListTodos/ListTodos";
import { Footer } from "./components/Footer/Footer";
import { ToggleTodos } from "./components/ToggleTodos/ToggleTodos";

export default function App() {
  const [filter, setFilter] = useState("all"); // active | completed
  const [todos, setTodos] = useState([]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const addNewTodo = (todo) => {
    if (todo.title.trim()) {
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    }
  };

  const toggleCompletedTodos = useCallback((completed) => {
    setTodos((todos) =>
      todos.map((todo) => {
        todo.completed = completed;
        return todo;
      })
    );
  }, []);

  const toggleTodo = (id, completed) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, title) => {
    const editingTodos = todos.map((todo) => {
      if (todo.id === id && title.trim()) {
        todo.title = title;
      }
      return todo;
    });
    setTodos(editingTodos);
  };

  const uncompletedTodosCount = todos.reduce((count, todo) => {
    if (!todo.completed) {
      count++;
    }
    return count++;
  }, 0);

  const completedTodosCount = todos.reduce((count, todo) => {
    if (todo.completed) count++;
    return count;
  }, 0);

  const isCompletedAll = todos.length === completedTodosCount;

  const hasCompleted = completedTodosCount > 0;

  const clearCompletedTodos = () => {
    setTodos(
      todos.filter((todo) => {
        if (todo.completed) {
          return !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo onKeyPress={addNewTodo} />
      </header>
      <section className="main">
        {todos.length > 0 && (
          <ToggleTodos
            toggleCompletedTodos={toggleCompletedTodos}
            isCompletedAll={isCompletedAll}
          />
        )}
        <ListTodos
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </section>
      {todos.length > 0 && (
        <Footer
          filter={filter}
          setFilter={setFilter}
          clearCompletedTodos={clearCompletedTodos}
          uncompletedTodosCount={uncompletedTodosCount}
          hasCompleted={hasCompleted}
        />
      )}
    </section>
  );
}
