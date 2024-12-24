import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[25%] left-[10%] flex flex-col'>
          <h1 className='text-2xl text-white font-extrabold my-4 ml-20'>turn your ideas into reality</h1>
          <p className='text-base text-white font-normal'>start for free and get attartive offers from the community</p>
        </div>
        <img src="cover1.jpg" alt="" className='w-full h-full object-cover ' />
      </div>
      <div className='w-1/2 h-full bg-white flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-black font-semibold'>Nik bloggers </h1>


        <div className='w-full flex flex-col'>
          <div className='w-full flex flex-col mb-5 '>
          <h3 className='text-2xl font-semibold mb-4'>Login</h3>
          <p className='text-sm mb-2 '>Welcome! Please enter your details</p>
        </div>

          <div className='w-full flex flex-col'>
            <input type="email" placeholder='email'   className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
            <input type="password" placeholder='Password'   className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
          </div>

          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
            <input type="checkbox" className='w-4 h-4  mr-2 ' />
            <p className='text-sm'>Remember Me for 30 days</p>
          </div>

          <p className='text-sm font-medium underline underline-offset-2cursor-pointer'>foorget password</p>
          </div>

          <div className='w-full flex flex-col my-4'>
            <button className='w-full text-white my-2 bg-black rounded-md p-4 text-center flex items-center justify-center'>Log in</button>
            <button className='w-full text-black my-2 bg-white rounded-md p-4 border-2 font-semibold border-black text-center flex items-center justify-center'>Register</button>
          </div>

          <div className='w-full flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-black'>
              <p className=' text-lg absolute text-black/80 bg-white'>or</p>
            </div>
          </div>

        </div>

        <div className='w-full flex item-center justify-center'>
          <p className='text-sm font-normal'>Don't Have an Account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>sign up</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login