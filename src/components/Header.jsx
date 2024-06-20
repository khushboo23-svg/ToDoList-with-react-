import React, { useState } from "react";

const Header = ({ tasks, setTasks }) => {
  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    fontSize: "16px",
    marginBottom: "10px",
    outline: "none",
  };

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleAddTask = () => {
    if (taskTitle.length === 0 || taskDate.length === 0) {
      alert('Some data is missing');
      return;
    }
    const newTask = { taskTitle, taskDate };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTaskTitle(''); // Clear input field
    setTaskDate('');  // Clear input field
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <input
          type="text"
          placeholder="Add something...."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className="col-md-3 ">
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div className="col-md-2 ">
        <button
          className="btn btn-success"
          onClick={handleAddTask}
          style={{ padding: "10px", width: "100%", fontSize: "16px" }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Header;
