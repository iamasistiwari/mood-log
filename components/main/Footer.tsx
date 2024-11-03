import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className='border-t border-neutral-900 pt-10 w-full min-h-72 flex justify-between'>
        <div className='pl-2 flex flex-col justify-start'>
            <div className='flex  items-center'>
                <Image className='mb-1 mr-2 p-2 rounded-full' src={'/icon2.png'} alt='logo' height={50} width={50}></Image>
                <Link href={'/dashboard'} className={`lg:text-xl opacity-85`}>Mood Log</Link>
            </div>
            <span className='pl-2 font-sans text-xs lg:text-sm text-neutral-700'>A product by <Link className='text-cyan-500 font-semibold' href={'https://ashishtiwari.net'} target="_blank" rel="noopener noreferrer">Ashish</Link></span>
            <span className='pl-2 font-sans text-xs lg:text-sm text-neutral-700'>Building in public at <Link className='text-cyan-500 font-semibold' href={'https://x.com/iamasistiwari'} target="_blank" rel="noopener noreferrer">@iamasistiwari</Link></span>
        </div>
        <div className='pt-4 flex flex-col gap-3 pr-8 lg:pr-20'>
            <span className='opacity-85'>Follow Me</span>
            <Link href={'https://github.com/iamasistiwari'} target="_blank" rel="noopener noreferrer" className='text-sm opacity-80 hover:opacity-100 focus:opacity-100 flex flex-row items-center '><span className='pr-1 pb-0.5'><FaGithub /></span> GitHub</Link>
            <Link href={'https://x.com/iamasistiwari'} target="_blank" rel="noopener noreferrer" className='text-sm flex opacity-80 hover:opacity-100 focus:opacity-100 flex-row items-center '><span className='pr-1 pb-0.5'><BsTwitterX /></span>Twitter</Link>
            <Link href={'https://www.linkedin.com/in/ashish-tiwari-0549552a9'} target="_blank" rel="noopener noreferrer" className='text-sm opacity-80 hover:opacity-100 focus:opacity-100 flex flex-row items-center '><span className='pr-1 pb-0.5'><FaLinkedin /></span> Linkedin</Link>
        </div>
        
    </div>
  )
}
