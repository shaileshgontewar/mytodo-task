import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{task.name}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className={`text-sm font-medium ${task.status === 'DONE' ? 'text-green-500' : 'text-red-500'}`}>{task.status}</p>
      <button
        onClick={() => onEdit(task)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 mr-2 rounded-md"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
