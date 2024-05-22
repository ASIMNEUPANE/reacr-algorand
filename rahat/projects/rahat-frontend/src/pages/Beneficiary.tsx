import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

// Define the types for the beneficiary
type Beneficiary = {
  Name: string;
  'Wallet Address': string;
  Gender: string;
  'Internet Access': string;
  'Phone Type': string;
  'Banking Status': number;
  fee: number;
};

const Beneficiary = () => {
  // Sample beneficiary data
  const beneficiaries: Beneficiary[] = [
    {
      Name: 'John Doe',
      'Wallet Address': '0xABC123456789',
      Gender: 'Male',
      'Internet Access': 'Yes',
      'Phone Type': 'Smartphone',
      'Banking Status': 1,
      fee: 100,
    },
    {
      Name: 'Jane Smith',
      'Wallet Address': '0xDEF987654321',
      Gender: 'Female',
      'Internet Access': 'No',
      'Phone Type': 'Basic',
      'Banking Status': 0,
      fee: 50,
    },
    {
      Name: 'Alice Johnson',
      'Wallet Address': '0xGHI567890123',
      Gender: 'Female',
      'Internet Access': 'Yes',
      'Phone Type': 'Feature',
      'Banking Status': 1,
      fee: 80,
    },
    {
      Name: 'Bob Brown',
      'Wallet Address': '0xJKL456789012',
      Gender: 'Male',
      'Internet Access': 'Yes',
      'Phone Type': 'Smartphone',
      'Banking Status': 1,
      fee: 120,
    },
  ];

  return (
    <div className="mt-16">
      <div className="bg-[#1c1c24] flex justify-center items-start flex-col rounded-[10px] sm:p-10 p-4">
        <Table>
          <TableCaption>A list of your beneficiaries.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Wallet Address</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Internet Access</TableHead>
              <TableHead>Phone Type</TableHead>
              <TableHead>Banking Status</TableHead>
              <TableHead>Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {beneficiaries.map((beneficiary, idx) => (
              <TableRow key={idx}>
                <TableCell>{beneficiary.Name}</TableCell>
                <TableCell>{beneficiary['Wallet Address']}</TableCell>
                <TableCell>{beneficiary.Gender}</TableCell>
                <TableCell>{beneficiary['Internet Access']}</TableCell>
                <TableCell>{beneficiary['Phone Type']}</TableCell>
                <TableCell>{beneficiary['Banking Status']}</TableCell>
                <TableCell>{beneficiary.fee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Beneficiary;
