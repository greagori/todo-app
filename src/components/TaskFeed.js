import React, { useEffect, useState } from "react";
import Task from "./Task";
import TaskBox from "./TaskBox";
import "./TaskFeed.css";
import FlipMove from "react-flip-move";
import db from "./firebase";

function TaskFeed() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks();
	}, []);

	// useEffect(() => {
	function getTasks() {
		db.collection("tasks")
			.orderBy("createdAt")
			.onSnapshot(function (querySnapshot) {
				setTasks(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						title: doc.data().title,
						inprogress: doc.data().inprogress,
						createdAt: doc.data().createdAt,
					}))
				);
			});
	}

	return (
		<div className="taskfeed">
			<div className="taskfeed__header"></div>
			<TaskBox />
			<FlipMove>
				{tasks.map((task) => (
					<Task
						title={task.title}
						createdAt={task.createdAt}
						inprogress={task.inprogress}
						id={task.id}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default TaskFeed;
