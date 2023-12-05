import React from 'react'
import Link from 'next/link'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import ProductList from '@/components/ui/ProductList'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'

export default function page() {
   
  return (
    <>
        <Navbar/>

      <div className="content flex flex-col md:flex-row md:container justify-between">
        <div className="filters border px-4 py-4 rounded-lg w-72 mx-auto md:w-60 h-screen mb-8 md:mb-0">
            <h4 className='text-xl mb-8'>Filters</h4>
            <div>
            <li className='flex items-center mb-8 justify-between'>Pro Supplier <Switch className='mx-4'/></li>
            <li className='flex items-center mb-8 justify-between'>Plus Supplier <Switch className='mx-4'/></li>
            <li className='flex items-center mb-8 justify-between'>With price <Switch className='mx-4'/></li>
            </div>

            <div className='mb-8'>
                <h4 className='text-xl mb-8'>Supplier Features</h4>
                <li className='flex items-center'><Checkbox className='me-2 ms-1'/><img src="images/Rectangle 3.png" alt="" /></li>
            </div>

            <div className='mb-8'>
                <h4 className='text-xl mb-8'>Minimum Order</h4>
                <Input/>
            </div>

            <div className='mb-8'>
                <h4 className='text-xl mb-8'>Price</h4>
                <div className="flex">
                <Input className='me-2'/>
                <Input className='ms-2'/>
                </div>
            </div>
        </div>

        <ProductList/>  
      </div>
        <Footer/>
    </>
  )
}
