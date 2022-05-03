import React, { useState } from "react";
import "./TaskBox.css";
import db from "./firebase";

function TaskBox() {
  const [todos, setTodos] = useState("");
  const sendTodo = (e) => {
    e.preventDefault();
    db.collection("tasks").add({
      title: todos,
    });
    setTodos("");
  };
  return (
    // BEM
    <div className="taskbox">
      <form>
        <div className="taskbox__input">
          <input
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
            type="text"
            placeholder="Enter a new Task"
          />
          <button className="taskbox__button" type="submit" onClick={sendTodo}>
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskBox;
