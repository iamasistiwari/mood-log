"use client"
/* eslint-disable prefer-const */
import React, { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RatingTags } from './RatingTags';
const years = Array.from({length: 2040-2024 +1}, (v, i) => 2024+i)
const months = {
    'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 
    'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 
    'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
};
export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const now = new Date();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Calendar() {
    


    const currentMonth = new Date().getMonth();
    const currentMonthName = monthNames[currentMonth];
    const [selectedMonth, setSelectedMonth] = useState(`${currentMonthName}`)
    const [selectedYear, setSelectedYear] = useState(`${new Date().getFullYear()}`)


    const year = Number(selectedYear);
    const month = selectedMonth;

    // Correctly calculate the first day of the month and the number of days in the month
    const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
    const firstDayOfMonth = monthNow.getDay();
    const daysInMonth = new Date(year, Object.keys(months).indexOf(month) + 1, 0).getDate();


    // Calculate how many rows are needed for the calendar grid
    const daysToDisplay = firstDayOfMonth + daysInMonth;
    const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

    return (
        <div className='flex flex-col overflow-hidden gap-1'>
            <div className='flex gap-x-10'>
                <div>
                    <Select
                    value={selectedMonth}
                    onValueChange={(value) => setSelectedMonth(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={currentMonthName} />
                        </SelectTrigger>
                        <SelectContent>
                        {monthNames.map((month, index) => (
                            <SelectItem key={index} value={month} onSelect={() => {setSelectedMonth(`${month}`)}}>{month}</SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Select
                    value={selectedYear}
                    onValueChange={(value) => setSelectedYear(value)}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={selectedYear} />
                        </SelectTrigger>
                        <SelectContent>
                        {years.map((year, index) => (
                            <SelectItem key={index} value={`${year}`} onSelect={() => {setSelectedYear(`${year}`)}}>{year}</SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {Array.from({ length: numRows }, (_, rowIndex) => (
                <div key={rowIndex} className='grid grid-cols-7 mx-40 gap-2'>
                    {dayList.map((dayOfWeek, dayOfWeekIndex) => {
                        // Calculate the day number to display in each cell
                        let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1);
                        // Check if the day is within the current month
                        let dayDisplay = (dayIndex > daysInMonth || dayIndex <= 0) ? false : true;

                        // Check if the current day is today
                        let isToday = dayIndex === now.getDate() && month === monthNames[now.getMonth()] && year === now.getFullYear();

                        if (!dayDisplay) {
                            return (
                                <div className='bg- rounded-full' key={dayOfWeekIndex}></div>
                            );
                        }

                        return (
                            <div key={dayOfWeekIndex} className={isToday ? 'bg-blue-400 rounded-full py-2 pl-3 max-w-40 hover:cursor-pointer' : ''+ 'hover:cursor-pointer border border-rose-300 rounded-full py-2 pl-3 max-w-40'}>
                                {dayIndex}.
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}