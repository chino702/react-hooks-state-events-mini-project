import React from "react";

const Task = ({ text, category }) => {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Task;
