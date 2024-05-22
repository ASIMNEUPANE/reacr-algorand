import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

// Define the types for the project
type Project = {
  id: number;
  name: string;
  tokenName: string;
  description: string;
};

// Hardcode the project data
const projects: Project[] = [
  {
    id: 1,
    name: 'Project Alpha',
    tokenName: 'ALPHA',
    description: 'This is the first project.',
  },
  {
    id: 2,
    name: 'Project Beta',
    tokenName: 'BETA',
    description: 'This is the second project.',
  },
  {
    id: 3,
    name: 'Project Gamma',
    tokenName: 'GAMMA',
    description: 'This is the third project.',
  },
  {
    id: 3,
    name: 'Project Gamma',
    tokenName: 'GAMMA',
    description: 'This is the third project.',
  },
  {
    id: 3,
    name: 'Project Gamma',
    tokenName: 'GAMMA',
    description: 'This is the third project.',
  },
  {
    id: 3,
    name: 'Project Gamma',
    tokenName: 'GAMMA',
    description: 'This is the third project.',
  },
  {
    id: 3,
    name: 'Project Gamma',
    tokenName: 'GAMMA',
    description: 'This is the third project.',
  },
  {
    id: 3,
    name: 'Project Gamma',
    tokenName: 'GAMMA',
    description: 'This is the third project.',
  },
];

const Project = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#1c1c24] flex justify-center items-start flex-col rounded-[10px] sm:p-10 p-4">
        <div className="p-3">
          <Link to="/admin/project/add" className="bg-[#3a3a43] rounded-[10px] w-36 p-2 text-white">
            Create Project
          </Link>
        </div>
        <Table>
          <TableCaption>A list of your recent Projects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>TokenName</TableHead>
              <TableHead className="">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{project.id}</TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>{project.tokenName}</TableCell>
                <TableCell>{project.description}</TableCell>
                {/* <TableCell className="">$250.00</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Project;


