import React, { useState, useEffect } from "react";
import "./toggleTodos.css";

export function ToggleTodos({ toggleCompletedTodos, isCompletedAll }) {
  const [checked, setChecked] = useState(isCompletedAll);
  const onChangeCheckBoxAllVal = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    toggleCompletedTodos(checked);
  }, [checked, toggleCompletedTodos]);
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checked}
        onChange={onChangeCheckBoxAllVal}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}
