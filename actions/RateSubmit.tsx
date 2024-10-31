"use server"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import prisma from '@/db/src'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'


const submitRating = async (rating: number) => {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id || "";
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();


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
                        fullDate: today,
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


export default async function RateSubmit(rating: number) {
    try {
        const submitResponse = await submitRating(rating);
        return submitResponse;
    } catch (error) {
        return error
    }
}