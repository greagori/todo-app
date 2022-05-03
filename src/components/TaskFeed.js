import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskBox from "./TaskBox";
import "./TaskFeed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

function TaskFeed() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    db.collection("tasks").onSnapshot((snapshot) =>
      setTasks(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="taskfeed">
      <div className="taskfeed__header"></div>
      <TaskBox />
      <FlipMove>
        {tasks.map((task) => (
          <Task key={task.text} title={task.title} />
        ))}
      </FlipMove>
    </div>
  );
}

export default TaskFeed;