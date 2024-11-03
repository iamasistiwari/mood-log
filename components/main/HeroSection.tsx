import Link from 'next/link'
import React from 'react'
import { IoMdHappy } from "react-icons/io";
import { GiNightSleep } from "react-icons/gi";
import { GiDistressSignal } from "react-icons/gi";
import { TextGenerateEffect } from '../ui/text-generate-effect';




export default function HeroSection() {
  return (
      <div className='w-full justify-center items-center flex text-center mt-24 flex-col relative'>
          <div className='flex flex-col justify-center w-full items-center rounded-3xl p-2 py-10'>
              <span className='text-2xl lg:text-5xl'><span className='text-indigo-600'></span>App lets you track</span>
              <span className='mt-4 text-2xl lg:text-5xl'><span>your </span><span className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'>daily</span> mood!</span>
              <TextGenerateEffect words='Create your mood record and see how you feel on' className='text-xs lg:text-xl mt-14'/>
              <span className='text-base lg:text-xl mt-1 text-purple-300'>every day of every year</span>
              <div className='mt-10 flex justify-center items-center ml-12'>
                  <Link href={'/signin'} className='hover:cursor-pointer mr-12 py-2 inline-flex h-12  items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#000103,55%,#000103)] bg-[length:200%_100%] px-5 lg:px-6 font-medium text-white transition-colors'>Log in</Link>
                  <Link href={'/signup'} className='hover:cursor-pointer mr-12 py-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-full bg-[linear-gradient(110deg,#166534,45%,#16a34a,55%,#166534)] bg-[length:200%_100%] px-5 lg:px-6 font-medium text-white transition-colors'>Sign up</Link>
              </div>
            </div>
      </div>
  )
}
     

export function Cards (){
  return (
    <div className='grid w-full justify-center items-center gap-y-3 lg:grid-cols-3 text-center px-4 xl:pl-20 '>

          <div className='flex justify-center items-center rounded-2xl p-4 bg-[#0a0a0a] max-w-sm mx-4 mt-2'>
            <span className='pr-4 opacity-80'><IoMdHappy size={40}/></span>
            <span className='flex flex-col text-start'>
              <span className='opacity-75'>Happy Mind</span>
              <span className='text-[10px] opacity-40 lg:text-[12px]'>Unlock inner happiness and embrace a positive state of mind.</span>
              
            </span>
          </div>

          <div className='flex justify-center items-center rounded-2xl p-4 bg-[#0a0a0a] max-w-sm mx-4 mt-2'>
            <span className='pr-4 opacity-80'><GiNightSleep size={40}/></span>
            <span className='flex flex-col text-start'>
              <span className='opacity-75'>Better Sleep</span>
              <span className='text-[10px] opacity-40 lg:text-[12px]'>Drift into deep, rejuvenating sleep and wake up refreshed.</span>
              
            </span>
          </div>


          <div className='flex justify-center items-center rounded-2xl p-4 bg-[#0a0a0a] max-w-sm mx-4 mt-2'>
            <span className='pr-4 opacity-80'><GiDistressSignal size={40}/></span>
            <span className='flex flex-col text-start '>
              <span className='opacity-75'>Less Stress</span>
              <span className='text-[10px] opacity-40 lg:text-[12px]'>Unlock inner happiness and embrace a positive state of mind.</span>
              
            </span>
          </div>


        </div>
  )
}