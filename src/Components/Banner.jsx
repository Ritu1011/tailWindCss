import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div  className='bg-[#2699fb] w-full py-[100px] font-bold'>
       <div className='max-w-[11240px] mx-auto text-center '>
        <div className='text-white  text-xl '>Welcome Our Store</div>
        <div className=' text-2xl  md:text-3xl mt-4 text-white'>Be Fashionable</div>
        <div className='text-white  text-[40px] mt-4'>
            Hurray !
        <Typed
                    strings={[' Here you can find anything',' visit our store']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={200}
                />
        </div>
        <button className='bg-black text-white py-2 px-5 md:py-3 md:px-10 rounded mt-7'>Get Started</button>
       </div>
    </div>
  )
}

export default Banner