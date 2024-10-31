"use client"
import moment from 'moment-timezone';
import { formatInTimeZone } from 'date-fns-tz';

function getDateInTimezone(timezone:string) {
    const now = new Date();
    const formattedDate = formatInTimeZone(now, timezone, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSXXX');
    return formattedDate;
}

const getUserTimeZone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

const timeZone = getUserTimeZone();
const currentDateInZone = moment.tz(timeZone)



export const getUserHour = ():number => {
    const date = currentDateInZone.hours();
    return date;
}



export const getUserDate = ():number => {
    const date = currentDateInZone.date();
    return date;
}
export const getUserYear = ():number => {
    const date = currentDateInZone.year()
    return date;
}
export const getFullDate = ():string => {
    const timezone = getUserTimeZone();
    const date = getDateInTimezone(timezone)
    return date;
}





