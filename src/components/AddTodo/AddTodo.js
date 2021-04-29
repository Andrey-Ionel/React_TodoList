import React, { useState, useEffect, useRef } from "react";
import "./addTodo.css";

export function AddTodo(props) {
  const [todoName, setTodo] = useState("");
  const onChangeInputVal = (event) => {
    setTodo(event.target.value);
  };
  const onEnterPress = (event) => {
    if (event.charCode === 13) {
      props.onKeyPress({
        title: todoName,
        id: Date.now(),
        completed: false
      });
      setTodo("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const inputRef = useRef(null);

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={onChangeInputVal}
      onKeyPress={onEnterPress}
      name="text"
      value={todoName}
      // ref={inputRef}
    />
  );
}
