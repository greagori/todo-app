import React, { useState } from "react";
import "./Task.css";
import { Modal } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import EditOutlinedIcon from "@mui/icons-material//EditOutlined";
import db from "./firebase";

export default function Task({ title, inprogress, id }) {
	function toggleInProgress() {
		db.collection("tasks").doc(id).update({
			inprogress: !inprogress,
		});
	}
	const [open, setOpen] = useState(false);

	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	function deleteTask() {
		db.collection("tasks").doc(id).delete();
	}
	return (
		<>
			<Modal open={open} onClose={(e) => setOpen(false)}>
				<div>
					<h1>I am a modal</h1>
				</div>
			</Modal>
			<div className="task">
				<div className="task__body">
					<div className="task__header">
						<div className="task__headertext">
							{title}
							<div className="task__headerdescription">
								<div className="task__status">
									Status: {inprogress ? "In Progress" : "Completed"}
									<div className="task__footer">
										<PublishedWithChangesIcon onClick={toggleInProgress}>
											{inprogress ? "Done" : "UnDone"}
										</PublishedWithChangesIcon>
										<EditOutlinedIcon onClick={(e) => setOpen(true)} />
										<DeleteOutlineIcon onClick={deleteTask} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
