"use server"
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import prisma from '@/db/src'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export type MoodLog = { date: number; rating: number };



const submitRating = async ({rating, date, fullDate, month, year}: {rating: number, date: number, fullDate: string, month: number, year: number}) => {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id || "";
    
    try {
        const user = await prisma.$transaction(async () => {
            const existingMoodLog = await prisma.moodLog.findFirst({
                where: { userId, month, year, date },
            });

            if (existingMoodLog) {
                return await prisma.moodLog.update({
                    where: { id: existingMoodLog.id },
                    data: { rating },
                });
            } else {
                return await prisma.moodLog.create({
                    data: {
                        userId,
                        fullDate,
                        date,
                        month,
                        year,
                        rating,
                    },
                });
            }
        });
        return user;
    } catch (e) {
        return e
    }
}


export async function RateSubmit(rating: number, date: number, fullDate: string, month: number, year: number) {
    try {
        const submitResponse = await submitRating({rating, date, fullDate, month, year});
        return submitResponse;
    } catch (error) {
        return error
    }
}


export async function getInfo(month: number, year: number):Promise<MoodLog[] | undefined> {
    const session = await getServerSession(authOptions)
    try{
      const user = prisma.moodLog.findMany({
          where: {
              userId: session?.user.id,
              month: month,
              year: year
          },
          select:{
              rating: true,
              date: true
          }
      })
      return user
    }catch(e){
      console.error(e)
      return []
    }
}