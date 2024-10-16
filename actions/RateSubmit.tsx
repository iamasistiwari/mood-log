"use server"
import prisma from '@/db/src'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'


const submitRating = async (rating: number) => {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id || ""

    try{
        const user = prisma.moodLog.createMany({
            data: {
                userId,
                month: new Date().getMonth()+1,
                year: new Date().getFullYear(),
                fullDate: new Date(),
                rating,
                date: 2
            }
        })
        return user
    }catch(e){
        console.log(e)
    }
}


export default async function RateSubmit(rating: number) {
    const submitResponse = await submitRating(rating)
    if(!submitResponse){
        alert('not bad')
    }
    return (
        
        <div className='text-white text-3xl'>
            NOT DONE
        </div>
    )
}
