"use client"
import React, { useState } from 'react';
import '../../app/globals.css';

export default function NumberInput() {
    const [inputValue, setInputValue] = useState<number | string>('');
    const [warning, setWarning] = useState(false);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setInputValue(value);
        if (value < -10 || value > 10) {
            setWarning(true);  
        } else {
            setWarning(false); 
        }
    };

    return (
        <div className="flex flex-col gap-2 w-screen relative mt-8">
            <div className='w-screen flex flex-row justify-center items-center'>        
                <input 
                    type="number"
                    onChange={handleInputChange}
                    placeholder="Enter a number"
                    className={`no-arrows ml-5 border border-neutral-800 focus:outline-0 w-96 bg-black p-2 rounded-xl ${warning ? 'border-red-500' : 'border-gray-300'}`} 
                />
                <button disabled={warning} className={`border border-slate-400 ${inputValue === ''? 'cursor-not-allowed': ''} rounded-xl py-2 px-5 ml-5 ${warning ? 'cursor-not-allowed opacity-30': 'cursor-pointer'} `}>Rate</button>
            </div>
            {warning && <p className="text-red-500 text-sm w-full top-[52px] right-9 text-center absolute">Entered number should be <span className='font-semibold'>' -10' {'<'}= no {'>'}= '10'</span></p>}
        </div>
    );
}