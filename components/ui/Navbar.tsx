import React from 'react'
import Link from 'next/link'
export default function () {
  return (
    <>
        <div className="navbar flex items-center justify-between px-4 md:px-12 py-4 mb-12">
        <div>
        <img src="/images/Frame 100.png" alt="" width={40}/>
        </div>
        <div className="links flex items-center">
            <Link href='/' className=''>About Us |  </Link>
            <Link href='/' className='flex w-32 md:me-4'><img src="/images/Vector.png" alt="contact" className='w-6 h-6 mx-2'/>Contact Us</Link>
            <img src="/images/Avatar.png" alt="" className='md:flex hidden'/>
        </div>
      </div>
    </>
  )
}
