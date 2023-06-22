import React from 'react'

const Experts = () => {
  return (
    <div className='max-w-[1240px] mx-4   my-10  md:grid grid-cols-2 '>
        
           <div className=' flex flex-row col-span-1 w-[80%] '>
            <img src="https://hrms.superworks.com/images/vectors/no-posts.svg"alt="abc" className='h-[250px] w-full '/>

           </div>
           <div className='  col-span-1 justify-center'>
         <h1 className='font-bold text-[#00df9a] my-2 uppercase'>Shop here</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel alias harum, quidem, exercitationem, assumenda ex expedita repellendus et aliquam quibusdam natus! 
        </p>
        <button className='bg-black text-white py-2 px-5 md:py-3 md:px-10 rounded mt-7'>Get Started</button>
           </div>
        
    </div>
  )
}
export default Experts