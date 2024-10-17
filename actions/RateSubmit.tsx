"use server"
import prisma from '@/db/src'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'


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
                date: 17
            }
        })
        return user
    }catch(e){
        console.log(e)
    }
}


export default async function RateSubmit(rating: number) {
    try {
        const submitResponse = await submitRating(rating);
        return submitResponse;
    } catch (error) {
        console.error('Error during rating submission:', error);
        return null;
    }
}