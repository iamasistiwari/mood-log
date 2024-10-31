import Calendar from '@/components/main/Calendar'
import InfoBar from '@/components/sub/InfoBar'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen'>
      <InfoBar />
      <Calendar />
    </div>
  )
}
