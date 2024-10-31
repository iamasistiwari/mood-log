"use client";
import React from 'react';
import Profile from '../sub/Profile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const path = usePathname();  
  return (
    <div className="h-20 items-center justify-between px-5 lg:px-20 flex border-b border-neutral-900">
      <Link href={'/dashboard'} className={`font-extrabold text-2xl lg:text-4xl text-slate-300 ${path === '/' || path === '/signin' || path === '/signup' ? 'text-center items-center justify-center w-full' :''}`}>
        <span className="text-indigo-600">MOOD</span> LOG
      </Link>
      <div className={`${path === '/' || path === '/signin' || path === '/signup' ? 'hidden' :'block'}`}>
        <Profile />
      </div>
    </div>
  );
}
