import React from 'react'
import Link from 'next/link'
export default function () {
  return (
    <>
        <div className="navbar flex items-center justify-between px-4 md:px-12 py-4 mb-12">
        <div>
        <img src="/images/Frame 100.png" alt="" width={40}/>
        </div>
        <div className="links flex">
            <Link href='/' className=''>About Us    |  </Link>
            <Link href='/' className='flex'><img src="/images/Vector.png" alt="contact" className='mx-4'/>Contact Us</Link>
        </div>
      </div>
    </>
  )
}
