import React from 'react'
import FilterSidenav from '@/components/ui/FilterSidenav'
import ProductList from '@/components/ui/ProductList'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'

export default function page() {
   
  return (
    <>
        <Navbar/>

      <div className="content flex flex-col md:flex-row md:container justify-between">
        <FilterSidenav/>
        <ProductList/>  
      </div>
        <Footer/>
    </>
  )
}
