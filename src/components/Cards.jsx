import React from "react";
import CardItems from "./CardItems";

const Cards = ({ tasks, setTasks }) => {
  return (
    <>
      {tasks.length === 0 && <p>The List is empty!</p>}
      {tasks.length > 0 && (
        <div className="row justify-content-center">
          {tasks.map((task, index) => (
            <CardItems key={index} task={task} index={index} tasks={tasks} setTasks={setTasks} />
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;