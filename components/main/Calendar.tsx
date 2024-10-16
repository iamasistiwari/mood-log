"use client"

/* eslint-disable prefer-const */
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React, { useCallback, useEffect, useState } from 'react';
import GetCalender from '../sub/GetCalender';

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = Array.from({length: 2040-2024 +1}, (v, i) => 2024+i)


export default function Calendar() {
    const [calenderData, setCalenderData] = useState<React.ReactNode>(null); 


    const currentMonth = new Date().getMonth();
    const currentMonthName = monthNames[currentMonth];
    const [selectedMonth, setSelectedMonth] = useState(`${currentMonthName}`)
    const [selectedYear, setSelectedYear] = useState(`${new Date().getFullYear()}`)



    const fetchCalenderData = useCallback(async () => {
        const month = selectedMonth;
        const year = Number(selectedYear);
        const calendar = await GetCalender({year, month})
        setCalenderData(calendar);
    }, [selectedMonth, selectedYear])

    useEffect(() => {
        fetchCalenderData();
    }, [fetchCalenderData])

    return (
        <div className='flex flex-col overflow-hidden gap-1'>
            <div className='flex gap-x-4 justify-center items-center mb-8 mt-10'>
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
            <div>
                {/* //loader to be here */}
                {calenderData}
            </div>
        </div>
    );
}