import React, { useState, useEffect, useRef } from "react";

export function TodoItem({
  completed,
  title,
  id,
  toggleTodo,
  removeTodo,
  updateTodo
}) {
  const editRef = useRef();
  const [value, setValue] = useState(title);
  const [editing, setEditing] = useState(false);

  const onChangeCheckBoxVal = (event) => {
    toggleTodo(id, event.target.checked);
  };
  const todoClassCompleted = completed ? "completed" : "";
  const todoClassEditing = editing ? "editing" : "";
  useEffect(() => {
    if (editing) {
      editRef.current.focus();
    }
  }, [editing]);

  return (
    <li className={`${todoClassCompleted} ${todoClassEditing}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onChangeCheckBoxVal}
        />
        <label onDoubleClick={() => setEditing(true)}>{title}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => removeTodo(id)}
        ></button>
      </div>
      <input
        ref={editRef}
        type="text"
        className="edit"
        onBlur={() => {
          setEditing(false);
          updateTodo(id, value);
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </li>
  );
}
