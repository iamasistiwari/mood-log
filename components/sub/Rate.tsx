/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState } from 'react';
import '../../app/globals.css';
import RateSubmit from '@/actions/RateSubmit';

export default function NumberInput() {
    const [inputValue, setInputValue] = useState<number | string>('');
    const [warning, setWarning] = useState(false);
    const [count, setCount] = useState(0);
    
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
            const result = await RateSubmit(Number(inputValue));

            if (result === null) {
                window.alert('An error occurred during submission.');
            }
            if (!result) {
                window.alert('Submission failed.');
            } else {
                window.alert('Submission successful!');
            }
        }
    }

    return (
        <div className="flex flex-col gap-2 w-screen relative mt-8">
            your count is {count}
            <div className='w-screen flex flex-row justify-center items-center'>        
                <input 
                    type="number"
                    onChange={handleInputChange}
                    placeholder="Enter a number"
                    className={`no-arrows ml-5 border border-neutral-800 focus:outline-0 w-96 bg-black p-2 rounded-xl ${warning ? 'border-red-500' : 'border-gray-300'}`} 
                />
                <button disabled={warning} onClick={handleSubmit} id='lightText' className={`bg-white font-extrabold text-black ${inputValue === ''? 'cursor-not-allowed': ''} rounded-xl py-2 px-5 ml-5 ${warning ? 'cursor-not-allowed opacity-30': 'cursor-pointer'} `}>Rate</button>
            </div>
            {warning && <p className="text-red-500 text-sm w-full top-[52px] right-9 text-center absolute">Entered number should be <span className='font-semibold'>&apos;0&apos; {'<='}= no {'=>'}= &apos;10&apos;</span></p>}
        </div>
    );
}