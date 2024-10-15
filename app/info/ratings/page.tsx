import GetCalender from '@/components/sub/GetCalender'
import { RatingTags } from '@/components/sub/RatingTags'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen flex justify-center mt-10'>
      <GetCalender year={2024} month='October' />
      <RatingTags />
    </div>
  )
}
