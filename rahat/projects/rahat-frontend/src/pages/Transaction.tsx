import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

// Define the types for the project
type Transaction = {
  TxnId: string;
  block: number;
  age: number;
  from: string;
  to: string;
  amount: number;
  fee: number;
};

// Hardcode the project data
const transactions: Transaction[] = [
  {
    TxnId: 'TXN001',
    block: 12345,
    age: 15,
    from: '0xabc123',
    to: '0xdef456',
    amount: 100,
    fee: 0.01,
  },
  {
    TxnId: 'TXN002',
    block: 12346,
    age: 10,
    from: '0xghi789',
    to: '0xjkl012',
    amount: 200,
    fee: 0.02,
  },
  {
    TxnId: 'TXN003',
    block: 12347,
    age: 5,
    from: '0xmnop345',
    to: '0xqrst678',
    amount: 300,
    fee: 0.03,
  },
  {
    TxnId: 'TXN004',
    block: 12348,
    age: 20,
    from: '0xuvwx901',
    to: '0xyzab234',
    amount: 400,
    fee: 0.04,
  },
  {
    TxnId: 'TXN005',
    block: 12349,
    age: 25,
    from: '0xcdef567',
    to: '0xghij890',
    amount: 500,
    fee: 0.05,
  },
];
const Transaction = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#1c1c24] flex justify-center items-start flex-col rounded-[10px] sm:p-10 p-4">
        {/* <div className="p-3">
          <Link to="/admin/project/add" className="bg-[#3a3a43] rounded-[10px] w-36 p-2 text-white">
            Create Project
          </Link>
        </div> */}
        <Table>
          <TableCaption>A list of your recent Projects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">TxnId</TableHead>
              <TableHead>Block</TableHead>
              <TableHead>Age</TableHead>
              <TableHead className="">From</TableHead>
              <TableHead className="">To</TableHead>
              <TableHead className="">Amount</TableHead>
              <TableHead className="">Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{transaction.TxnId}</TableCell>
                <TableCell>{transaction.block}</TableCell>
                <TableCell>{transaction.age}</TableCell>
                <TableCell>{transaction.from}</TableCell>
                <TableCell>{transaction.to}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.fee}</TableCell>

                {/* <TableCell className="">$250.00</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transaction;
