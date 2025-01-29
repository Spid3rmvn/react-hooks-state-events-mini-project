import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilteredTasks(TASKS);
    } else {
      setFilteredTasks(TASKS.filter((task) => task.category === category));
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
