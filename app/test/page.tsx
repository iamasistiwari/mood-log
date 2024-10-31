import { getFullDate } from '@/lib/currentDate'
import React from 'react'

export default function page() {
  const date = getFullDate();
  return (
    <div>
      {date}
    </div>
  )
}
