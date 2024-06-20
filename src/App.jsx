import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";

const App = () => {
  const containerStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  };

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <React.Fragment>
      <center>
        <div
          className="container mt-3 text-center border p-2"
          style={containerStyle}
        >
          <h1 className="text-center bg-info text-light p-2">TODO LIST</h1>
          <Header tasks={tasks} setTasks={setTasks} />
          <div className="row justify-content-center mt-3">
            <Cards tasks={tasks} setTasks={setTasks} />
          </div>
        </div>
      </center>
    </React.Fragment>
  );
};

export default App;