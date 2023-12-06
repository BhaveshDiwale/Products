import Latestsubscribers from '@/components/ui/Latestsubscribers'
import { Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import  Link  from 'next/link'
import React, { useState } from 'react'
import ListedCompanies from '@/components/ui/ListedCompanies'
import SideNav from '@/components/ui/SideNav'

export default function page() {
 
    
  return (
    <>
    <div className="coverFlex flex">
        <SideNav/>
      <div className="contentRight h-screen container">
        <div className="nav flex justify-between items-center py-2 mb-4">
        <h5 className='font-bold'>Dashboard</h5>
        <div className="flex items-center">
        <i className="fa-regular fa-bell text-black text-xl me-8"></i>
        <img src="/images/Avatar.png" alt="" />
        </div>
        </div>

        <h3 className="font-bold text-3xl mb-2 ">Welcome Back Jay</h3>
        <h6 className='text-sm text-gray-500 mb-8'>Here is the information about all your orders</h6>

        <div className="flex mb-12 lg:flex-row flex-col">
            <div className="barChartActiveBuyersSellers border rounded-xl shadow-lg px-4 py-4 mb-12 lg:mb-0 lg:w-8/12 h-96">
                <h4 className='font-bold'>Active Buyers and Sellers</h4>
                <span className='text-gray-500 text-xs'>Monthly</span>
            </div>
            <div className="allUsers lg:w-4/12 border rounded-xl shadow-lg px-4 py-4 lg:ms-4">
                <h4 className='text-sm font-bold mb-1'>All Users</h4>
                <h6 className='text-xl font-bold mb-2'>186.5K</h6>
                <span className='text-xs text-gray-500 mb-2'>Users per month</span>
            </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start">
            <div className="tab md:me-4 border shadow-lg rounded-lg h-full xl:mx-0 xl:me-4 md:w-[400px] w-full mb-16 xl:mb-0">
            <Tabs defaultValue="account" className="md:w-[400px] ">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                    <div className="h4 flex items-center justify-center font-bold py-[203px]">Chart here</div>
              </TabsContent>
              <TabsContent value="password">
                    <div className="h4 flex items-center justify-center font-bold py-[203px]">Chart here</div>
              </TabsContent>
            </Tabs>

            </div>
            <div className="table border shadow-lg rounded-xl w-6/12 px-8 py-4 md:w-8/12 mb-12 xl:mx-0 xl:ms-4">
                  <Latestsubscribers/>
            </div>
        </div>

            <div className="listedCompanies border shadow-lg rounded-xl px-8 py-4 mb-12">
                <ListedCompanies/>
            </div>
      </div>
      </div>
    </>
  )
}
