"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { getInfo } from '@/actions/RateSubmit';
import { MoodLog } from '@/actions/RateSubmit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any

interface timeLeftType {
  diffHours: number,
  diffMinutes: number
}

export default function InfoBar({month, year}: {month: number, year: number}) {

  const [user, setUser ] = useState<MoodLog[]>([]);
  const [userFecthed, setUserFetched] = useState<boolean>(false);

  const [timeLeft, setTimeleft] = useState<timeLeftType>({diffHours: 0, diffMinutes: 0})
  const [streak, setStreak] = useState<number>();
  const [rating, setRating] = useState<number>();

  const fetchData = useCallback(async () => {
    const res = await getInfo(month, year)
    setUserFetched(true)
    return res
  },[month, year])

  console.log(user)

  
  useEffect(() => {

    const fetchedData = async () => {
      const data = await fetchData();
      if (data) {
        setUser(data);
      }

    }
    fetchedData();

  },[fetchData])


  useEffect(() => {


    // calculating time remaining in the day 
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const differenceInfo = Number(tomorrow) - Number(now);
    const diffHours = Math.floor(differenceInfo / (1000 * 60 * 60));
    const diffMinutes = Math.floor((differenceInfo % (1000 * 60 * 60)) / (1000 * 60));
    setTimeleft({diffHours, diffMinutes})

    // calculating average rating
    const rating: number[] = user.map(item => item.rating)
    let sum = 0;
    rating.forEach((value) => {sum += value})
    setRating(Math.floor((sum / now.getDate())*100)/100) 



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
    setStreak(streakCount)

  }, [userFecthed, user])




  return (
    <div className='lg:w-screen px-4 lg:px-[430px] mt-8 mb-10 '>
        <div className='flex flex-row w-full border justify-between py-3 rounded-2xl px-2 lg:px-10 border-neutral-800'>
          <div className='flex flex-col'>
            <span className='text-sm lg:text-base'>Streak</span>
            <span className='w-full text-center text-indigo-600'>{streak}</span>

          </div>
          <div className='flex flex-col'>
            <span className='text-sm lg:text-base'>Average Mood</span>
            <span className='w-full text-center text-indigo-600'>{rating}</span>

          </div>
          <div className='flex flex-col'>
            <span className='text-sm lg:text-base'>Time Remaining</span>
            <span className='w-full text-center text-indigo-600'>{timeLeft?.diffHours +" hr "+ timeLeft?.diffMinutes+ " min"}</span>
          </div>

        </div>
    </div>
  )
}
