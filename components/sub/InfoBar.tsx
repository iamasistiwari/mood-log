import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'
import prisma from '@/db/src';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MoodLog = { date: number; rating: number };



async function getInfo():Promise<MoodLog[] | undefined> {
  const session = await getServerSession(authOptions)
  try{
    const user = prisma.moodLog.findMany({
        where: {
            userId: session?.user.id,
            month: new Date().getMonth()+1,
            year: new Date().getFullYear()
        },
        select:{
            rating: true,
            date: true
        }
    })
    return user
  }catch(e){
    console.error(e)
    return []
  }
  
}


export default async function InfoBar() {
  
// calculating time remaining in the day 
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const differenceInfo = Number(tomorrow) - Number(now);
  const diffHours = Math.floor(differenceInfo / (1000 * 60 * 60));
  const diffMinutes = Math.floor((differenceInfo % (1000 * 60 * 60)) / (1000 * 60));

// calculating average mood
  const user: MoodLog[] = await getInfo() || [];
  const rating: number[] = user.map(item => item.rating)
  let sum = 0;
  rating.forEach((value) => {sum += value})
  const averageRating = Math.floor((sum / now.getDate())*100)/100

//calculating the streak
  const dates: number[] = user.map(item => item.date)
  let streakCount = 0;
  for(let i = 1; i < dates.length; i++){
    if(dates[i] === dates[i-1]+1){
      streakCount += 1
    }else{
      streakCount = 0
    }
  }
  if(streakCount != 0){
    streakCount += 1;
  }

  return (
    <div className='lg:w-screen px-4 lg:px-[430px] mt-8 mb-10 '>
        <div className='flex flex-row w-full border justify-between py-3 rounded-2xl px-2 lg:px-10 border-neutral-800'>
          <div className='flex flex-col'>
            <span className='text-sm lg:text-base'>Streak</span>
            <span className='w-full text-center text-indigo-600'>{streakCount}</span>

          </div>
          <div className='flex flex-col'>
            <span className='text-sm lg:text-base'>Average Mood</span>
            <span className='w-full text-center text-indigo-600'>{averageRating}</span>

          </div>
          <div className='flex flex-col'>
            <span className='text-sm lg:text-base'>Time Remaining</span>
            <span className='w-full text-center text-indigo-600'>{diffHours +" hr "+ diffMinutes+ " min"}</span>
          </div>

        </div>
    </div>
  )
}
