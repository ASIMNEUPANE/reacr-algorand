//

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const projects = [
    { id: 1, name: 'Project 1', tokenName: 'Token 1', description: 'This is project 1' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },
    { id: 2, name: 'Project 2', tokenName: 'Token 2', description: 'This is project 2' },

    // Add more projects as needed
  ];

  return (
    <div className="text-black p-6 min-h-screen">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl">Projects of the Rahat</h1>
        <Link className='bg-green-600 text-white p-3 rounded-md' to={'/home/add'}>
          <h1>Add Project</h1>
        </Link>
      </div>
      <table className="w-full border-collapse">
        <thead className="bg-blue-400 text-white h-22">
          <tr className="bg-darkblue h-20">
            <th className="border-b border-white py-2 px-4 text-left">Id</th>
            <th className="border-b border-white py-2 px-4 text-left">Name</th>
            <th className="border-b border-white py-2 px-4 text-left">Token Name</th>
            <th className="border-b border-white py-2 px-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="bg-blue-300 text-black h-16">
              <td className="border-b border-white py-2 px-4">{project.id}</td>
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

export default Home;
