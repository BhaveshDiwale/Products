import Navbar from '@/components/ui/Navbar'
import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <>
        <div style={{background:'url(/images/hero2.jpg)', backgroundSize:'cover'}} className='h-full rounded-b-3xl'>
       <div className="navbar flex items-center justify-between px-4 md:px-12 py-4 mb-12">
        <div>
        <img src="/images/Frame 100.png" alt="" width={40}/>
        </div>
        <div className="links flex items-center">
            <Link href='/' className='me-4 text-white'>Login  </Link>
            <Link href='/' className=' me-4 px-6 text-sm py-1 rounded-3xl bg-white'>Sign Up</Link>
            <img src="/images/Avatar.png" alt="" className='md:flex hidden'/>
        </div>
      </div>

      <div className="flex flex-col text-white items-center justify-center text-center lg:py-32 pb-24 pt-20">
        <h2 className='lg:text-6xl md:text-5xl text-3xl font-bold  md:mb-8 mb-4'>The leading B2B <br /> platform for global trade</h2>
        <p className='lg:text-3xl md:text-xl text-sm mb-8'>Search for products & find verified sellers near you</p>
        <div className='bg-[#000000c4] px-2 ps-3 py-2 rounded-3xl'>
        <input type="text" style={{outline:'none'}} className='bg-transparent text-white text-xs md:me-8 w-60 md:w-72' placeholder='Search product or service name'/>
        <Link href='/' className=' px-6 text-xs py-2 rounded-3xl bg-white text-black'>Search</Link>
        </div>
      </div>
      </div>
    </>
  )
}
