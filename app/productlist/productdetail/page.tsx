import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
      <div className="flex justify-evenly container flex-col md:flex-row">
        <div className="productDetail flex flex-col xl:flex-row">
            <div className="prodImg xl:me-16 me-4 mb-8 xl:mb-0">
                <img src="/images/picture gallery.png" alt="" width={500}/>
            </div>
            <div className="prodSpecs xl:w-72 md:w-96 mx-auto xl:mx-4 mb-20 xl:mb-0">
                <h3 className='font-bold text-2xl mb-4'>Havic HV G-92565651 Gamepad</h3>
                <hr />
                <div className="flex items-baseline my-4">
                <h4 className='font-bold text-xl me-2'>Price: $180</h4>
                <p className='text-xs text-[#5E7384]'>For 50 pieces</p>
                </div>
                <hr />

                <h6 className='text-[#5E7384] text-sm my-2'>Minimum order quantity - <span className='text-black'>50 Piece/Pieces</span></h6>
                <p className='text-[#5E7384] text-sm xl:leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco Read more...</p>
                <button className='border rounded-3xl h-9 px-4 py-2 w-full my-4'>Get Latest Price</button>
                <Button className='rounded-3xl'>Send Inquiry</Button>
            </div>
        </div>
        <div className="sellerDetail border px-4 py-4 md:w-96  rounded-xl h-full md:ms-8 xl:ms-0">
            <h6 className='font-bold mb-4'>Seller Details</h6>
            <img src="/images/photo.png" alt="" className='mx-auto mb-4'/>
            <h6 className='text-center font-bold text-sm mb-2'>NIDHI VISION INDIA PVT. LTD</h6>
            <button className='text-[#1A9882] border bg-[#E9FAF7] rounded-xl px-2 py-1 flex mx-auto mb-8'>Active</button>
        <hr />
            <div className="contact text-sm mt-4">
                <div className="flex items-center mb-2">
                    <img src="/images/Bagde.png" alt="" height={5}/>
                    <div>
                        <span className='text-gray-500'>Businesses Number</span> <br />
                        <span>2465465116464</span>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                <img src="/images/Bagde (1).png" alt="" />
                    <div>
                        <span className='text-gray-500'>Address</span> <br />
                        <span>Unity Park, Shop No.4, Narpatgiri Chowk, Near Hdfc Bank, Somwar Peth, Pune, Maharashtra, 411011, India</span>
                    </div>
                </div>
                <div className="flex items-center mb-2">
                <img src="/images/Bagde (2).png" alt="" />
                    <div>
                        <span className='text-gray-500 '>Member Since</span> <br />
                        <span>3 Years</span>
                    </div>
                </div>
                <img src="/images/Rectangle 3.png" alt="" />
                <button className='border rounded-3xl h-9 px-4 py-2 w-full mt-4'>Get Latest Price</button>
                <button className='border rounded-3xl h-9 px-4 py-2 w-full my-4 bg-black text-white'>Contact Seller</button>
            </div>
        </div>
      </div>

    <div className="flex container justify-around flex-col lg:flex-row">
      <div className="aboutProduct xl:w-9/12 lg:w-7/12 md:ms-8 ms-2 text-justify">
        <h4 className='underline my-8'>About Product</h4>
        <h4 className='font-bold'>Description</h4>
        <p className='text-gray-500 leading-7 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="infoCards flex flex-col md:flex-row mt-8 items-center">
        <div className='border px-4 py-2 w-72 text-center mx-2 mb-4 rounded-xl'>
            <h4 className='text-gray-500'>Delivery Time</h4>
            <h6>7 days</h6>
        </div>
        <div className='border px-4 py-2 w-72 text-center mx-2 mb-4 rounded-xl'>
            <h4 className='text-gray-500'>Supply Ability</h4>
            <h6>200000 Per Month</h6>
        </div>
        <div className='border px-4 py-2 w-72 text-center mx-2 mb-4 rounded-xl'>
            <h4 className='text-gray-500'>Payment Options</h4>
            <h6>Cash Advance</h6>
        </div>
      </div>
      </div>

        <div className="enquiryToSupplier md:w-96 w-64 mt-16 xl:ms-8 lg:mx-8 border px-4 py-8 rounded-xl h-full mx-auto">
            <h4 className='underline font-bold md:ms-8 mb-2'>Send your enquiry to the Supplier</h4>
            <h6 className='text-sm md:ms-8 font-bold mb-4 md:mb-8'>TO - NIDHI VISION INDIA PVT. LTD</h6>
            <form className='md:ms-8'>
                <label htmlFor="Name" className='ms-1'>Name</label><br />
                <input className='px-4 py-2 md:w-72 w-56 rounded-sm mb-4 border' type="text" name='Name' placeholder='Enter your name here' /><br />
                <label htmlFor="Mobile" className='ms-1'>Mobile Number</label><br />
                <input className='px-4 py-2 md:w-72 w-56 rounded-sm mb-4 border' type="number" name='Mobile' placeholder='+91 |' /><br />
                <label htmlFor="Name" className='ms-1'>Message</label><br />
                <input className='px-4 py-2 md:w-72 w-56 rounded-sm mb-4 border' type="text" name='Message' placeholder='Type your message here...' /><br />
                <Button className='md:w-72 w-56 mt-2'>Send Request &rarr;</Button>
            </form>
        </div>
      
    </div>

    <div className='container mt-20'>
        <h4 className='font-bold text-xl mb-8'>Similar Products</h4>
        <div className="flex flex-col md:flex-row">

      <div className="card rounded-2xl shadow-lg xl:w-72 lg:w-56 py-2 mb-4 px-4 xl:me-8 lg:me-4">
        <img src={'/images/Rectangle 53.png'} alt="" width={200} className='mb-4 mx-auto'/>
        <h5 className='font-bold lg:text-sm xl:text-md mb-2'>Apple Airpods Pro MWP22A M/A Bluetooth 7.1 </h5>
        <p className='text-xs mb-2 text-[#8B8B8B]'>Min Quantity : 150</p>
        <div className='flex items-center mb-2'>
        <h6 className='font-bold me-2 '>$120.23 </h6>
        <p className='text-xs text-[#8B8B8B] line-through'>$11.23</p>
        </div>
        <p className='text-xs text-[#8B8B8B] mb-4'>Seller name</p>
        <Button className='mb-4'>Send Inquiry</Button>
      </div>

      <div className="card rounded-2xl shadow-lg xl:w-72 lg:w-56 py-2 mb-4 px-4 xl:mx-8 lg:mx-4">
        <img src={'/images/Rectangle 53 (1).png'} alt="" width={200} className='mb-4 mx-auto'/>
        <h5 className='font-bold lg:text-sm xl:text-md mb-2'>Apple Airpods Pro MWP22A M/A Bluetooth 7.1 </h5>
        <p className='text-xs mb-2 text-[#8B8B8B]'>Min Quantity : 150</p>
        <div className='flex items-center mb-2'>
        <h6 className='font-bold me-2 '>$120.23 </h6>
        <p className='text-xs text-[#8B8B8B] line-through'>$11.23</p>
        </div>
        <p className='text-xs text-[#8B8B8B] mb-4'>Seller name</p>
        <Button className='mb-4'>Send Inquiry</Button>
      </div>

      <div className="card rounded-2xl shadow-lg xl:w-72 lg:w-56 py-2 mb-4 px-4 xl:mx-8 lg:mx-4">
        <img src={'/images/Rectangle 53 (2).png'} alt="" width={200} className='mb-4 mx-auto'/>
        <h5 className='font-bold lg:text-sm xl:text-md mb-2'>Apple Airpods Pro MWP22A M/A Bluetooth 7.1 </h5>
        <p className='text-xs mb-2 text-[#8B8B8B]'>Min Quantity : 150</p>
        <div className='flex items-center mb-2'>
        <h6 className='font-bold me-2 '>$120.23 </h6>
        <p className='text-xs text-[#8B8B8B] line-through'>$11.23</p>
        </div>
        <p className='text-xs text-[#8B8B8B] mb-4'>Seller name</p>
        <Button className='mb-4'>Send Inquiry</Button>
      </div>      

      <div className="card rounded-2xl shadow-lg xl:w-72 lg:w-56 py-2 mb-4 px-4 xl:mx-8 lg:mx-4">
        <img src={'/images/Rectangle 53.png'} alt="" width={200} className='mb-4 mx-auto'/>
        <h5 className='font-bold lg:text-sm xl:text-md mb-2'>Apple Airpods Pro MWP22A M/A Bluetooth 7.1 </h5>
        <p className='text-xs mb-2 text-[#8B8B8B]'>Min Quantity : 150</p>
        <div className='flex items-center mb-2'>
        <h6 className='font-bold me-2 '>$120.23 </h6>
        <p className='text-xs text-[#8B8B8B] line-through'>$11.23</p>
        </div>
        <p className='text-xs text-[#8B8B8B] mb-4'>Seller name</p>
        <Button className='mb-4'>Send Inquiry</Button>
      </div>
        </div>
    </div>
      <Footer/>
    </>
  )
}
