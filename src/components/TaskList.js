import React from "react";
import Task from "./Task"; // Import the Task component

function TaskList({ tasks }) {
  // Check if tasks are available and if not, show a fallback message
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <div className="tasks">
      {/* Render each task using the Task component */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} /> // Ensure each task has a unique key (typically id)
      ))}
    </div>
  );
}

export default TaskList;
