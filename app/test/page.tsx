"use client"
import { getUserHour } from '@/lib/currentDate';
import React from 'react';

export default function Page() {
  const date = getUserHour()

  return <div>{date}</div>;
}
