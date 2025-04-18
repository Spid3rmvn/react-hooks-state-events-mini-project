import React, { useState } from "react";
import PropTypes from "prop-types";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0] || ""); // Default to the first category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && category) {
      onTaskFormSubmit({ text, category });
      setText(""); // Clear the form after submission
      setCategory(categories[0] || ""); // Reset to the first category
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

NewTaskForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired,
};

export default NewTaskForm;
