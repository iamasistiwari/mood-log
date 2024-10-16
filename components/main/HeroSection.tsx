import React from 'react'

export default function HeroSection() {
  return (
    <div>
      <div className='flex flex-col justify-center w-screen items-center mt-10'>
        <span className='text-2xl lg:text-5xl'><span className='bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent'>Mood Log</span> Helps you track</span>
        <span className='mt-4 text-2xl lg:text-5xl'><span>your </span><span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>daily</span> mood!</span>
        <span className='text-xs lg:text-xl mt-14 '>Create your mood record and see how you feel on</span>
        <span className='text-base lg:text-xl mt-1 text-purple-300'>every day of every year</span>
        <div className='mt-10 flex justify-center items-center ml-12'>
            <button className='border mr-12 rounded-3xl px-4 py-2'>Sign up</button>
            <button className='border mr-12 rounded-3xl px-4 py-2 text-white bg-purple-900'>Log in</button>
        </div>
      </div>
    </div>
  )
}
