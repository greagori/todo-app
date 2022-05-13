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
	function getTasks() {
		db.collection("tasks")
			.orderBy("createdAt")
			.onSnapshot((snapshot) =>
				setTasks(
					snapshot.docs.map((doc) => ({
						key: doc.id,
						id: doc.id,
						title: doc.data().title,
						inprogress: doc.data().inprogress,
						createdAt: doc.data().createdAt,
					}))
				)
			);
	}

	// useEffect(() => {
	// 	db.collection("tasks")
	// 		.orderBy("createdAt")
	// 		.onSnapshot(function (querySnapshot) {
	// 			setTasks(
	// 				querySnapshot.docs.map((doc) => ({
	// 					key: doc.id,
	// 					id: doc.id,
	// 					title: doc.data().title,
	// 					inprogress: doc.data().inprogress,
	// 					createdAt: doc.data().createdAt,
	// 				}))
	// 			);
	// 		});
	// });

	return (
		<div className="taskfeed">
			<div className="taskfeed__header"></div>
			<TaskBox />
			<div>
				<FlipMove easing="ease-in-out" duration={100}>
					{tasks.map((task) => (
						<Task
							title={task.title}
							createdAt={task.createdAt}
							inprogress={task.inprogress}
							id={task.id}
							key={task.key}
						/>
					))}
				</FlipMove>
			</div>
		</div>
	);
}
export default TaskFeed;
