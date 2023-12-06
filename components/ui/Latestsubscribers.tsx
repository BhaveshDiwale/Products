import React from 'react'
import { Table,  TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from '@/components/ui/table'

export default function Latestsubscribers() {
    const subscribers = [
        {
          companyName: 'Nidhi Vision pvt ltd',
        issueDate: '31 March 2023',
          subscription: "Premium",
          
        },
        {
          companyName: 'Nidhi Vision pvt ltd',
          issueDate: '31 March 2023',
          subscription: "Premium",
         },
        {
          companyName: 'Nidhi Vision pvt ltd',
          issueDate: '31 March 2023',
          subscription: "Premium",
          
        },
        {
          companyName: 'Nidhi Vision pvt ltd',
          issueDate: '31 March 2023',
          subscription: "Pro",
                 },
        {
          companyName: 'Nidhi Vision pvt ltd',
          issueDate: '31 March 2023',
          subscription: "Premium",
            },
        {
          companyName: 'Nidhi Vision pvt ltd',
          issueDate: '31 March 2023',
          subscription: "Premium",
          
        },
        {
          companyName: 'Nidhi Vision pvt ltd',
          issueDate: '31 March 2023',
          subscription: "Premium",
        },
      ]
  return (
    <div>
        <h4 className='font-bold text-xl'>Latest Subscribers</h4>
         <Table>
           <TableHeader>
             <TableRow>
               <TableHead className="w-[100px]">Company</TableHead>
               <TableHead className='text-center'>Issued Date</TableHead>
               <TableHead className='text-center'>Subscription</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             {subscribers.map((subscriber) => (
               <TableRow>
                 <TableCell className="font-medium w-40">{subscriber.companyName}</TableCell>
                 <TableCell className='text-center'>{subscriber.issueDate}</TableCell>
                 <TableCell className='text-center'>{subscriber.subscription}</TableCell>
               </TableRow>
             ))}
           </TableBody>
          <TableFooter></TableFooter>
         </Table>
    </div>
  )
}
