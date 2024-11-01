"use server"

import React from 'react';
import { RatingBackground } from './RatingTags';
import { getInfo, MoodLog } from '@/actions/RateSubmit';

const months = {
    'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 
    'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 
    'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
};
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export default async function GetCalender({year, month}: {year: number, month: string}) {
    const monthNumber = monthNames.indexOf(month)+1;

    const userData: MoodLog[] = await getInfo(monthNumber, year) ?? [];
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
        <div className='flex flex-col overflow-hidden w-screen lg:w-full h-full'>
            {Array.from({ length: numRows }, (_, rowIndex) => (
                <div key={rowIndex} className='grid grid-cols-7 mx-4 lg:mx-52 h-10 mb-2'>
                    {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                        // Calculate the day number to display in each cell
                        const dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1);
                        // Check if the day is within the current month
                        const dayDisplay = (dayIndex > daysInMonth || dayIndex <= 0) ? false : true;

                        // let isToday = dayIndex === now.getDate() && month === monthNames[now.getMonth()] && year === now.getFullYear();
                        if (!dayDisplay) {
                            return (
                                <div className='rounded-full ' key={dayOfWeekIndex}></div>
                            );
                        }

                        const ratingValue = Ratings[Dates.lastIndexOf(dayIndex)] === undefined ? '-0' : `${Ratings[Dates.lastIndexOf(dayIndex)]}` ;
                        
                        
                        return (
                            <div key={dayOfWeekIndex} 
                            className={`hover:cursor-pointer text-xs lg:text-sm border flex rounded-full justify-center items-center lg:justify-normal lg:items-start lg:py-2 lg:pl-3 w-10 h-10 lg:w-36 lg:h-auto border-neutral-800
                            ${RatingBackground[ratingValue]} ${ratingValue === '-0' ? 'text-slate-400' : 'text-[0px]'} `}
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