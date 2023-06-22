import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
const Header = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
   <div className="flex justify-between items-center max-w-[1240px]  mx-auto py-[10px]">
     <div className='text-3xl'>
        RC Creation
    </div>
    {
      toggle?
      <AiOutlineClose className=' text-white text-2xl md:hidden block cursor-pointer' onClick={()=>setToggle(!toggle)}/>
      :
      <AiOutlineMenu className='text-white text-2xl md:hidden block cursor-pointer' onClick={()=>setToggle(!toggle)}/>
    }
     <ul className='hidden md:flex text-white gap-4'>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contant</li>
     </ul>
     {/* responsive menu */}
     <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[88px] 
     ${toggle?  "left-0":  "left-[-100%]" }
      `}>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contant</li>
     </ul>
    </div>
    </div>
  )
}

export default Header