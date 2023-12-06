import React from 'react'
import Link from 'next/link'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <>
       <div className="footer w-full flex justify-center md:flex-row flex-col md:items-start items-center md:text-start text-center mt-20 bg-[#EEEEEE] py-24">
            <div className='xl:mx-16 lg:mx-8 md:mx-6 mb-4 md:mb-0'>
                <h5 className='font-bold mb-4'>Category</h5>
                <Link href='/' className='block text-sm mb-2'>First link</Link>
                <Link href='/' className='block text-sm mb-2'>Second Long link</Link>
                <Link href='/' className='block text-sm mb-2'>Third link</Link>
                <Link href='/' className='block text-sm mb-2'>Fourth Long link</Link>
                <Link href='/' className='block text-sm mb-2'>Fifth link</Link>
                <Link href='/' className='block text-sm mb-2'>Sixth link</Link>
            </div>
            <div className='xl:mx-16 lg:mx-8 md:mx-6 mb-4 md:mb-0'>
                <h5 className='font-bold mb-4'>Category</h5>
                <Link href='/' className='block text-sm mb-2'>First link</Link>
                <Link href='/' className='block text-sm mb-2'>Second Long link</Link>
                <Link href='/' className='block text-sm mb-2'>Third link</Link>

            </div>
            <div className='xl:mx-16 lg:mx-8 md:mx-6 mb-4 md:mb-0'>
                <h5 className='font-bold mb-4'>Category</h5>
                <Link href='/' className='block text-sm mb-2'>First link</Link>
                <Link href='/' className='block text-sm mb-2'>Second Long link</Link>
                <Link href='/' className='block text-sm mb-2'>Third link</Link>
                <Link href='/' className='block text-sm mb-2'>Fourth Long link</Link>
                <Link href='/' className='block text-sm mb-2'>Fifth link</Link>
                <Link href='/' className='block text-sm mb-2'>Sixth link</Link>

            </div>
            <div className='xl:mx-16 lg:mx-8 md:mx-6 mb-4 md:mb-0'>
                <h5 className='font-bold mb-4'>Category</h5>
                <Link href='/' className='block text-sm mb-2'>First link</Link>
                <Link href='/' className='block text-sm mb-2'>Second link</Link>
                <Link href='/' className='block text-sm mb-2'>Third link</Link>
                <Link href='/' className='block text-sm mb-2'>Fourth link</Link>
            </div>
            <div className='xl:mx-16 lg:mx-8 md:mx-6 mb-4 md:mb-0'>
                <img src="/images/Frame 100.png" alt="" width={40} className='mx-auto'/>
                <p className='text-xs my-4'>© Copyright 2023 Canmart</p>
                <div className="flex">
                <SocialMedia/>
                </div>
            </div>
        </div>
    </>
  )
}
