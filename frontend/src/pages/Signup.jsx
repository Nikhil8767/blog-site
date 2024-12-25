import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row items-start'>
    <div className='relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col'>
      <div className='absolute top-[25%] left-[10%] flex flex-col'>
        <h1 className='text-xl md:text-2xl text-white font-extrabold my-4 ml-10 md:ml-20'>
          Join our community today
        </h1>
        <p className='text-sm md:text-base text-white font-normal'>
          Sign up and explore endless possibilities
        </p>
      </div>
      <img src="cover1.jpg" alt="" className='w-full h-auto md:h-full object-cover' />
    </div>
    <div className='w-full md:w-1/2 h-auto md:h-full bg-white flex flex-col p-10 md:p-20 justify-between'>
      <h1 className='text-lg md:text-xl text-black font-semibold'>Nik bloggers</h1>

      <div className='w-full flex flex-col'>
        <div className='w-full flex flex-col mb-5'>
          <h3 className='text-xl md:text-2xl font-semibold mb-4'>Sign Up</h3>
          <p className='text-xs md:text-sm mb-2'>Create an account to get started</p>
        </div>

        <div className='w-full flex flex-col'>
          <input type="text" placeholder='Full Name' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input type="email" placeholder='Email' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input type="password" placeholder='Password' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          <input type="password" placeholder='Confirm Password' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
        </div>

        <div className='w-full flex items-center my-4'>
          <input type="checkbox" className='w-4 h-4 mr-2' />
          <p className='text-xs md:text-sm'>I agree to the Terms and Conditions</p>
        </div>

        <div className='w-full flex flex-col my-4'>
          <button className='w-full text-white my-2 bg-black rounded-md p-3 md:p-4 text-center text-sm md:text-base flex items-center justify-center'>
            Sign Up
          </button>
        </div>

        <div className='w-full flex items-center justify-center relative py-2'>
          <div className='w-full h-[1px] bg-black'></div>
          <p className='text-sm md:text-lg absolute text-black/80 bg-white px-2'>or</p>
        </div>

        <div className='w-full text-black my-6 font-semibold bg-white border-2 border-black rounded-md p-3 md:p-4 text-center text-sm md:text-base flex item-center justify-center'>
          Sign up with Google
        </div>
      </div>

      <div className='w-full flex item-center justify-center'>
        <p className='text-xs md:text-sm font-normal'>
          Already have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Log in</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Signup