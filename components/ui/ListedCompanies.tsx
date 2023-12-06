'use client'
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

export default function Latestsubscribers() {
    const subscribers = [
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
          
        },
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
         },
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
          
        },
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
        },
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
            },
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
            },
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
            },
        {
          companyName: 'Nidhi Vision pvt ltd',
          listedOn: '03 November 2023',
          status: 'Active',
          city: "Saskatoon",
            },
      ]
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSubscribers = subscribers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };

 

  return (
    <div className="mb-8">
      <h4 className="font-bold text-xl">Listed Companies</h4>
      <Table>
        <TableHeader>
          <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
                       <TableHead className='text-center'>Listed on</TableHead>
                       <TableHead className='text-center'>Status</TableHead>
                       <TableHead className='text-center'>City</TableHead>
                       <TableHead className='text-center'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentSubscribers.map((subscriber, index) => (
            <TableRow key={index}>
               <TableCell className="font-medium w-40">{subscriber.companyName}</TableCell>
                         <TableCell className='text-center'>{subscriber.listedOn}</TableCell>
                         <TableCell className='text-center'>{subscriber.status}</TableCell>
                         <TableCell className='text-center'>{subscriber.city}</TableCell>
                         <TableCell className='text-center'><i className="fa-solid fa-ellipsis-vertical"></i></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="pagination w-48 mx-auto text-center rounded mt-8">
        {Array.from({ length: Math.ceil(subscribers.length / itemsPerPage) }).map(
          (item, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`pagination-item ${
                currentPage === index + 1 ? 'active bg-black text-white' : 'bg-[#F3F4F8]'
              }  mx-2 rounded-xl px-4 py-1 my-2`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
