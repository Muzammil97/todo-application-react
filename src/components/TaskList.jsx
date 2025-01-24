
import React from 'react';

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
          <button onClick={() => onEditTask(index)}>Edit</button>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

