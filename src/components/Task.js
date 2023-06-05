import React from "react";

const Task = ({ id, text, category, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
