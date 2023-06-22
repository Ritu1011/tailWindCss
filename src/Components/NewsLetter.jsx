import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
<div className="max-w-[1240px] md:flex justify-between mx-auto py-[30px]">
    <div className=" ">
        <h1 className='text-white text-[25px] md:text-[40px] font-bold'>New Arrivals</h1>
        <p className='text-white text-[15px]'>Find exclusive collectionshop more save more</p>
    </div>
    <div className=" ">
<input type="text" placeholder='Email' className=' py-2 px-2 md:py-3 mr-2 text-slate-300 rounded'/> 
<button className='bg-black text-white py-2 px-5 md:py-3 md:px-6 rounded mt-7'>Get Started</button>
<br />
<p className='text-white mt-2'>for more quries <a href="https://github.com/Ritu1011" target="_blank" className='text-[blue] underline'>click here</a> </p>
   </div>
</div>
    </div>
  )
}

export default NewsLetter