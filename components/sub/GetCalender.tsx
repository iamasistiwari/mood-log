"use server"
/* eslint-disable prefer-const */
import React from 'react';
import prisma from '@/db/src';
import { RatingBackground } from './RatingTags';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
const months = {
    'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 
    'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 
    'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
};
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const now = new Date();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



const getData = async (year: number, month: number) => {
    const session = await getServerSession(authOptions)
    try{
        const user = prisma.moodLog.findMany({
            where: {
                userId: session?.user.id,
                month,
                year
            },
            select:{
                date: true,
                rating: true
            }
        })
        return user
    }catch(e){
        console.log(e)
    }
}

export default async function GetCalender({year, month}: {year: number, month: string}) {
    const monthNumber = monthNames.indexOf(month)+1;
    const userData = await getData(year, monthNumber) ?? [];
    const Dates: number[] = userData.map(item => item.date)
    const Ratings: number[] = userData.map(item => item.rating)

    // Correctly calculate the first day of the month and the number of days in the month
    const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
    const firstDayOfMonth = monthNow.getDay();
    const daysInMonth = new Date(year, Object.keys(months).indexOf(month) + 1, 0).getDate();




    // Calculate how many rows are needed for the calendar grid
    const daysToDisplay = firstDayOfMonth + daysInMonth;
    const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

    return (
        <div className='flex flex-col overflow-hidden gap-1 w-full'>
            {Array.from({ length: numRows }, (_, rowIndex) => (
                <div key={rowIndex} className='grid grid-cols-7 mx-40 gap-2'>
                    {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                        // Calculate the day number to display in each cell
                        let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1);
                        // Check if the day is within the current month
                        let dayDisplay = (dayIndex > daysInMonth || dayIndex <= 0) ? false : true;

                        let isToday = dayIndex === now.getDate() && month === monthNames[now.getMonth()] && year === now.getFullYear();
                        if (!dayDisplay) {
                            return (
                                <div className='rounded-full ' key={dayOfWeekIndex}></div>
                            );
                        }

                        let ratingValue = Ratings[Dates.lastIndexOf(dayIndex)] === undefined ? '-0' : `${Ratings[Dates.lastIndexOf(dayIndex)]}` ;
                        
                        
                        return (
                            <div key={dayOfWeekIndex} 
                            className={`hover:cursor-pointer border flex rounded-full py-2 pl-3 max-w-40 
                            ${RatingBackground[ratingValue]} ${isToday? 'border-cyan-800': 'border-neutral-800'}`}
                            >
                                {dayIndex}.
                            </div>

                        );
                    })}
                </div>
            ))}
        </div>
    );
}


// {isToday ? (ratingValue === '-0' ? 'bg-cyan-400' : '') : ''}