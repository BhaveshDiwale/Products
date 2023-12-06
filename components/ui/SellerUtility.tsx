"use client"
import React,{useState} from 'react'
import ProductList from './ProductList';

export default function SellerUtility() {
    const [isOnSellerProfile,setIsOnSellerProfile] = useState(true);
  return (
    <>
     <span className='me-2 text-sm text-black underline' onClick={()=>setIsOnSellerProfile(true)} style={{cursor:'pointer'}}>Seller Profile</span>
        <span className='text-sm text-gray-500' onClick={()=>setIsOnSellerProfile(false)} style={{cursor:'pointer'}}>Product & Services</span>
        {isOnSellerProfile ?
         <div className="cards md:h-96 h-full my-12">
         <div className="bg-[#EDF0F5] md:px-8 py-8 mb-20">
                 <div className="flex justify-center flex-col md:flex-row ">
                 <div className="card xl:w-80 bg-white mx-8 px-4 py-4 rounded-xl shadow-lg mb-8">
                     <h6 className='font-bold mb-8'>Electronic Gadgets Seller</h6>
                     <img src="/images/Rectangle 53.png" alt="" className='h-60 mx-auto'/>
                 </div>
                 <div className="card  xl:w-80 bg-white mx-8 px-4 py-4 rounded-xl shadow-lg">
                 <h6 className='font-bold'>Top Ranking Furniture Seller</h6>
                 <img src="/images/Rectangle 53 (2).png" alt="" className='h-60 mx-auto'/>
                 </div>
                 </div>
             </div>
         </div>
        :
        <div className='my-12 lg:ms-12 md:mx-12 mx-0'>
        <ProductList/>
        </div>
        }
    </>
  )
}