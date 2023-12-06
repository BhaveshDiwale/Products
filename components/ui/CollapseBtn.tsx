'use client'
import React,{useState} from 'react'

export default function CollapseBtn() {
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapse =()=>{
        setCollapsed(true);
    }
  return (
    <>
        
        <i className='fa-solid fa-bars text-white text-xl' onClick={handleCollapse} style={{cursor:'pointer'}}></i>
    </>
  )
}
