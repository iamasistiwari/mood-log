"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { MdOutlineLogout } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { signOut } from 'next-auth/react';
export default function Profile() {
    const session = useSession();
    const [isClicked, setHovered] = useState(false);
    const name = session.data?.user.name

    return (
        <div className={`flex flex-col justify-center items-center cursor-pointer`}
            onClick={() => setHovered(!isClicked)}
        >
            <div className='bg-slate-800 w-9 h-9 lg:w-11 lg:h-11 flex justify-center items-center text-center rounded-full cursor-pointer relative flex-row'>
                    {name?.charAt(0)}
            </div>

            {isClicked && <Card />}
        </div>
    )
}

function Card() {
    return <div className='flex flex-col absolute right-4 top-20 border border-neutral-700 bg-neutral-900 gap-y-2 p-3 rounded-xl'>
        <div className='hover:opacity-75 flex justify-center items-center'>
            <span className='flex justify-center items-center pr-1 pb-[3px] w-[17px] h-[17px]'><FaHistory /></span>
            History
        </div>
        <div className='hover:opacity-75 flex ' onClick={() => signOut({callbackUrl: '/'})}>
            <span className='flex justify-center items-center pr-1 pb-[3px]'><MdOutlineLogout /></span>
            Logout
        </div>
    </div>
}