import React, { useState } from "react";
import "./TaskBox.css";
import { serverTimestamp } from "firebase/firestore";
import db from "./firebase";

function TaskBox() {
	const [taskInput, setTask] = useState("");
	const addTask = (e) => {
		e.preventDefault();
		db.collection("tasks").add({
			inprogress: true,
			createdAt: serverTimestamp(),
			title: taskInput,
			taskDescription: "",
		});

		setTask("");
	};

	return (
		// BEM
		<div className="taskbox">
			<form>
				<div className="taskbox__input">
					<input
						value={taskInput}
						onChange={(e) => setTask(e.target.value)}
						type="text"
						placeholder="Enter a new Task"
					/>
					<button className="taskbox__button" type="submit" onClick={addTask}>
						Add Task
					</button>
				</div>
			</form>
		</div>
	);
}

export default TaskBox;
