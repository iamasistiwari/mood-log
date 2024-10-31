"use client";
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [date, setDate] = useState(0);

  useEffect(() => {
    setDate(new Date().getMinutes());
  }, []);

  return <div>{date}</div>;
}
