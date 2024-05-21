import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [updatedBy, setUpdatedBy] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="text-black p-6 min-h-screen">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl">Create New Project</h1>
        <Link className="bg-red-600 text-white p-3 rounded-md" to={'/home'}>
          <h1>Go Back</h1>
        </Link>
      </div>{' '}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Created By"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Updated By"
          value={updatedBy}
          onChange={(e) => setUpdatedBy(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Create Project
        </button>
      </form>
    </div>
  );
}

export default AddProject;
