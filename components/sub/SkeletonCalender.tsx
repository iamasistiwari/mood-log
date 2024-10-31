import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCalender() {

  return (
    <div className='flex flex-col overflow-hidden w-screen lg:w-full h-full'>
        {Array.from({ length: 5 }, (_, rowIndex) => (
            <div key={rowIndex} className='grid grid-cols-7 mx-4 lg:mx-52 h-10 mb-2'>
                {Array.from({length: 7}, (_, dayWeekIndex) => {
                    return (
                        <div key={dayWeekIndex} >
                          <Skeleton className="hover:cursor-pointer  bg-neutral-900 flex rounded-full lg:py-2 lg:pl-3 w-10 h-10 lg:w-36  " />
                        </div>
                    );
                })}
            </div>
        ))}
    </div>
);
}
