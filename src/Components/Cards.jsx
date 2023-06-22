import React from 'react'

const Cards = () => {
  return (
    <div className='py-[100px]'>
    <div className='px-3 md:grid grid-cols-3 max-w-[1240px] mx-auto gap-5'>
       <div  className='shadow-xl h-[400px] hover:scale-105 duration-4500 rounded m-4' >
        <div className='m-3 sm:mt-[50px] text-center '>

        <h1 className='text-20px text-[#2699fb] font-bold mb-5' >Men's Wear</h1>
        <img src="https://hrms.superworks.com/images/vectors/no-posts.svg"alt="abc" className='h-[120px] w-full mb-3 '/>
        <p className='text-[15px]'>Lorem ipsum dolor sit amet , blanditiis minus ea enim officia praesentium? Natus vel excepturi officiis officia, voluptatum ex corporis eaque reprehenderit quaerat? Praesentium, ipsa eos?
        </p>
        <button className='bg-black text-white py-2 px-5 md:py-3 md:px-10 rounded mt-7'>Get Started</button>
        </div>
       </div>
       <div className='shadow-xl h-[400px] hover:scale-105 duration-500 m-4  rounded'>
       <div className='m-3 sm:mt-[50px] text-center '>

<h1 className='text-20px text-[#2699fb] font-bold mb-5' >Women's Wear</h1>
<img src="https://hrms.superworks.com/images/vectors/no-posts.svg"alt="abc" className='h-[120px] w-full mb-3 '/>
<p className='text-[15px]'>Lorem ipsum dolor sit amet , blanditiis minus ea enim officia praesentium? Natus vel excepturi officiis officia, voluptatum ex corporis eaque reprehenderit quaerat? Praesentium, ipsa eos?
</p>
<button className='bg-black text-white py-2 px-5 md:py-3 md:px-10 rounded mt-7'>Get Started</button>
</div>
        </div>

       <div className='shadow-xl h-[400px] hover:scale-105 duration-500 m-4  rounded'> 
    
       <div className='m-3 sm:mt-[50px] text-center '>

        <h1 className='text-20px text-[#2699fb] font-bold mb-5' >Kid's Wear</h1>
        <img src="https://hrms.superworks.com/images/vectors/no-posts.svg"alt="abc" className='h-[120px] w-full mb-3 '/>
        <p className='text-[15px]'>Lorem ipsum dolor sit amet , blanditiis minus ea enim officia praesentium? Natus vel excepturi officiis officia, voluptatum ex corporis eaque reprehenderit quaerat? Praesentium, ipsa eos?
        </p>
        <button className='bg-black text-white py-2 px-5 md:py-3 md:px-10 rounded mt-7'>Get Started</button>
        </div>
       </div>

    </div>
    </div>
  )
}

export default Cards