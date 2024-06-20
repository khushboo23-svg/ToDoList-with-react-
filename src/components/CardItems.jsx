import React, { useState, useEffect } from "react";

const CardItems = ({ task, index, tasks, setTasks }) => {
  const [editing, setEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(task.taskTitle);
  const [editedTaskDate, setEditedTaskDate] = useState(task.taskDate);

  // Update local state when task prop changes
  useEffect(() => {
    setEditedTaskTitle(task.taskTitle);
    setEditedTaskDate(task.taskDate);
  }, [task]);

  const cardStyle = {
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
  };

  const buttonStyle = {
    width: "45%",
    margin: "2px",
  };

  const editTask = () => {
    setEditing(true);
  };

  const saveEditedTask = () => {
    // Perform validation if needed
    const updatedTasks = tasks.map((t, idx) =>
      idx === index ? { taskTitle: editedTaskTitle, taskDate: editedTaskDate } : t
    );
    setTasks(updatedTasks);
    setEditing(false);
  };

  const cancelEdit = () => {
    // Reset edited values to original task values
    setEditedTaskTitle(task.taskTitle);
    setEditedTaskDate(task.taskDate);
    setEditing(false);
  };

  const deleteTask = () => {
    const val = window.confirm("Do you really want to delete this task?");
    if (val) {
      const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="col-md-3" style={cardStyle}>
      {editing ? (
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={editedTaskTitle}
            onChange={(e) => setEditedTaskTitle(e.target.value)}
            style={{ ...buttonStyle, width: "100%" }}
          />
          <br />
          <input
            type="date"
            value={editedTaskDate}
            onChange={(e) => setEditedTaskDate(e.target.value)}
            style={{ ...buttonStyle, width: "100%", marginTop: "5px" }}
          />
          <br />
          <button className="btn btn-success" style={buttonStyle} onClick={saveEditedTask}>
            Save
          </button>
          <button className="btn btn-secondary" style={buttonStyle} onClick={cancelEdit}>
            Cancel
          </button>
        </div>
      ) : (
        <div style={{ marginBottom: "10px" }}>
          <b>{task.taskTitle}</b>
          <p>{task.taskDate}</p>
          <hr />
          <button className="btn btn-warning" style={buttonStyle} onClick={editTask}>
            Edit
          </button>
          <button className="btn btn-danger" style={buttonStyle} onClick={deleteTask}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CardItems;
