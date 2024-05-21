import React from 'react';

function Project() {
  const projects = [
    { id: 1, name: 'Project 1', tokenName: 'Token 1', description: 'This is project 1' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },
    // Add more projects as needed
  ];

  return (
    <div className="bg-black text-white p-6 min-h-screen">
      <h1 className="text-3xl mb-4">Projects</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-darkblue">
            <th className="border-b border-white py-2 px-4 text-left">Name</th>
            <th className="border-b border-white py-2 px-4 text-left">Token Name</th>
            <th className="border-b border-white py-2 px-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="odd:bg-gray-800 even:bg-gray-700">
              <td className="border-b border-white py-2 px-4">{project.name}</td>
              <td className="border-b border-white py-2 px-4">{project.tokenName}</td>
              <td className="border-b border-white py-2 px-4">{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Project;
