import React, { forwardRef } from "react";
import "./Task.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Task = forwardRef(({ title }, ref) => {
  return (
    <div className="task" ref={ref}>
      <div className="task__body">
        <div className="task__header">
          <p>{title}</p>
          <div className="task__headertext">
            <div className="task__headerdescription">
              <p>task description</p>
              <div className="task__footer">
                <p>modal</p>
                <DeleteOutlineIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Task;