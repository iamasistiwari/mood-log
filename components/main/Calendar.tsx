"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaCircleInfo } from "react-icons/fa6";

import React, { useCallback, useEffect, useState } from 'react';
import GetCalender from '../sub/GetCalender';
import RateSubmit from "@/actions/RateSubmit";
import { toast } from "sonner";
import SkeletonCalender from "../sub/SkeletonCalender";
import Link from "next/link";
export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = Array.from({length: 2040-2024 +1}, (v, i) => 2024+i)


export default function Calendar() {
    const [calenderData, setCalenderData] = useState<React.ReactNode>(null); 
    const [calenderLoaded, setCalenderLoaded] = useState(false);
    const currentMonth = new Date().getMonth();
    const currentMonthName = monthNames[currentMonth];
    const [selectedMonth, setSelectedMonth] = useState(`${currentMonthName}`)
    const [selectedYear, setSelectedYear] = useState(`${new Date().getFullYear()}`)



    const fetchCalenderData = useCallback(async () => {
        const month = selectedMonth;
        const year = Number(selectedYear);
        const calendar = await GetCalender({year, month})
        setCalenderData(calendar);
        setCalenderLoaded(true)
    }, [selectedMonth, selectedYear])

    useEffect(() => {
        fetchCalenderData();
    }, [fetchCalenderData])


    const [inputValue, setInputValue] = useState<number | string>('');
    const [warning, setWarning] = useState(false);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setInputValue(value);
        if (value < 0 || value > 10) {
            setWarning(true);  
        } else {
            setWarning(false); 
        }
    };
    const handleSubmit = async () => {
        if(!warning && inputValue != ''){
            toast.promise(
                RateSubmit(Number(inputValue)),
                {
                  loading: 'Submitting your rating...', 
                  success: 'Rating submitted successfully!',
                  error: 'Failed to submit rating', 
                }
            );
            fetchCalenderData();
        }
    }


    return (
        <div className='flex flex-col overflow-hidden gap-1'>
            <div className="flex flex-col gap-2  lg:w-screen relative mt-8 ml-1">
                <div className='w-screen flex flex-row pl-4 lg:pl-0 lg:justify-center items-center'>        
                    <input 
                        type="number"
                        onChange={handleInputChange}
                        placeholder="Enter a number"
                        className={`no-arrows lg:ml-5 border border-neutral-800 focus:outline-0 w-44 lg:w-96 bg-black p-2 rounded-xl ${warning ? 'border-red-500' : 'border-gray-300'}`} 
                    />
                    <button disabled={warning} onClick={handleSubmit} id='lightText' className={`bg-slate-300 font-extrabold text-black ${inputValue === ''? 'cursor-not-allowed': ''} rounded-xl py-2 px-5 ml-5 ${warning ? 'cursor-not-allowed opacity-30': 'cursor-pointer'} `}>Rate</button>
                    <Link href={'/info/ratings'} className="opacity-50 pl-4 cursor-pointer hover:opacity-75">
                        <FaCircleInfo />
                    </Link>
                </div>
                {warning && <p className="text-red-500 text-sm w-full top-[52px] right-9 text-center absolute">Entered number should be <span className='font-semibold'>&apos;0&apos; {'<='}= no {'=>'}= &apos;10&apos;</span></p>}
            </div>
            <div className='flex gap-x-4 justify-center items-center mb-8 mt-8'>
                <div>
                    <Select
                    value={selectedMonth}
                    onValueChange={(value) => setSelectedMonth(value)}
                    >
                        <SelectTrigger className="w-[120px] lg:w-[180px]">
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
                        <SelectTrigger className="w-[100px] lg:w-[180px]">
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
            <div className="h-full">
                {!calenderLoaded && <SkeletonCalender />}
                {calenderData}
            </div>
        </div>
    );
}