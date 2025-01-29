import React from "react";

function Task({ task }) {
  return (
    <div className="task">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      {/* Add more details if needed */}
    </div>
  );
}

export default Task;
