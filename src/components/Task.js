import React, { forwardRef, useState } from "react";
import "./Task.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import db from "./firebase";

const Task = forwardRef(({ title, id, inprogress }, ref) => {
	const [input, setInput] = useState(title);

	function toggleInProgress() {
		db.collection("tasks").doc(id).update({
			inprogress: !inprogress,
		});
	}

	function updateTask(e) {
		e.preventDefault();
		db.collection("tasks").doc(id).set(
			{
				title: input,
				key: id,
			},
			{ merge: true }
		);
	}

	function deleteTask() {
		db.collection("tasks").doc(id).delete();
	}
	return (
		<div className="task" ref={ref}>
			<div className="task__body">
				<div className="task__header">
					<div className="task__title">
						<form onSubmit={updateTask}>
							<input
								className={`task__title${
									!inprogress ? "--completed" : "--notcompleted"
								}`}
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value, title)}
							></input>
						</form>
						<div className="task__headerdescription">
							<div className="task__status">
								<div className="task__footer">
									<PublishedWithChangesIcon
										onClick={toggleInProgress}
									></PublishedWithChangesIcon>
									{/* {inprogress ? "" : " ✔️ "} */}
									{inprogress ? "" : "Complete"}
									<DeleteOutlineIcon onClick={deleteTask} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
export default Task;
