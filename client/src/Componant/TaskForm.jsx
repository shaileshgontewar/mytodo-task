import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, editTask } from '../features/tasks/TaskActions';

const TaskForm = ({ taskToEdit }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(taskToEdit ? taskToEdit.name : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [status, setStatus] = useState(taskToEdit ? taskToEdit.status : 'PENDING');

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      name,
      description,
      status,
    };

    if (taskToEdit) {
      // If we are editing a task
      dispatch(editTask(dispatch, { ...taskData, id: taskToEdit.id }));
    } else {
      // If we are adding a new task
      dispatch(createTask(dispatch, taskData));
    }

    // Reset form
    setName('');
    setDescription('');
    setStatus('PENDING');
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {taskToEdit ? 'Edit Task' : 'Add New Task'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Task Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-md"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
          <textarea
            id="description"
            className="w-full p-3 border rounded-md"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-lg font-medium mb-2">Status</label>
          <select
            id="status"
            className="w-full p-3 border rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="PENDING">Pending</option>
            <option value="DONE">Done</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
