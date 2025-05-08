import React from "react";

const TodoList = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      {/* <h1 className="text-2xl font-bold text-center ">To-Do List</h1> */}
      <div className="flex space-x-2">
        <input
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="Add a new task..."
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg  hover:bg-blue-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoList;
