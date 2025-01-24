// App.js
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import TaskInput from './components/TaskInput.jsx';
import TaskList from './components/TaskList.jsx';
import './styles/style.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskValue, setEditingTaskValue] = useState('');

  // Add a new task
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete a task
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Start editing a task
  const startEditingTask = (index) => {
    setEditingTaskIndex(index);
    setEditingTaskValue(tasks[index]);
  };

  // Update the edited task
  const updateTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingTaskIndex] = editingTaskValue;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
    setEditingTaskValue('');
  };

  return (
    <div className="app-container">
      <Header />
      <TaskInput onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask} 
        onEditTask={startEditingTask} 
      />
      {editingTaskIndex !== null && (
        <div className="edit-task">
          <input 
            type="text" 
            value={editingTaskValue} 
            onChange={(e) => setEditingTaskValue(e.target.value)} 
          />
          <button onClick={updateTask}>Update Task</button>
        </div>
      )}
    </div>
  );
}

export default App;

