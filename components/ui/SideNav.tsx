'use client'
import React, { useState } from 'react'
import Link from 'next/link'
export default function SideNav() {
    const [collapsed,setCollapsed] = useState(false);
    const collapsedTrue =()=>{
        setCollapsed(true);
    }
    const collapsedFalse =()=>{
        setCollapsed(false);
    }
  return (
    <>
    {collapsed===false?
     <div className="sidebar bg-black w-64 text-white lg:h-[250vh] xl:h-[235vh] lg:h-[320vh] md:h-[410vh] h-[420vh]">
     <div className="flex  justify-between items-center px-4 py-4">
      <h4 className='logo text-white text-5xl'>Q</h4>
      <i className='fa-solid fa-bars text-2xl' style={{cursor:'pointer'}} onClick={collapsedTrue}></i>
    </div>
    <Link href='/' className='block px-4 py-2 mx-4 my-4 rounded-md text-sm'>Menu</Link>
    <Link href='/' className='block px-4 py-2 mx-4 my-4 rounded-md text-sm'>Dashboard</Link>
    <Link href='/' className='block px-4 py-2 mx-4 my-4 rounded-md text-sm'>Companies</Link>
    <Link href='/' className='block px-4 py-2 mx-4 my-4 rounded-md text-sm'>Subscriptions</Link>
    </div>
    :

    <div className='collapsed  bg-black w-28 text-white lg:h-[250vh] xl:h-[235vh] lg:h-[320vh] md:h-[410vh] h-[420vh]'>
      <div className='px-4 py-4'>
      <h4 className='logo text-white text-5xl mb-4'>Q</h4>
      <i className='fa-solid fa-bars text-2xl' style={{cursor:'pointer'}} onClick={collapsedFalse}></i>
      </div>

    <Link href='/' className='block px-1 py-2 mx-1 my-4 rounded-md text-sm'>Menu</Link>
    <Link href='/' className='block px-1 py-2 mx-1 my-4 rounded-md text-sm'>Dashboard</Link>
    <Link href='/' className='block px-1 py-2 mx-1 my-4 rounded-md text-sm'>Companies</Link>
    <Link href='/' className='block px-1 py-2 mx-1 my-4 rounded-md text-sm'>Subscriptions</Link>
    </div>
    }
    
    </>
  )
}
