import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "" || category === "") {
      return;
    }

    onTaskFormSubmit({ text, category });

    setText("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label htmlFor="task-details">Details:</label>
      <input
        type="text"
        id="task-details"
        value={text}
        onChange={handleTextChange}
        aria-label="Details"
      />

      <label htmlFor="task-category">Category:</label>
      <select
        id="task-category"
        value={category}
        onChange={handleCategoryChange}
        aria-label="Category"
      >
        <option value="">Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
