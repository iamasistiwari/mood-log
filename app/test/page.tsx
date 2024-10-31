"use client";
import { getFullDate } from '@/lib/currentDate';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(getFullDate());
  }, [])

  return <div>{date}</div>;
}
