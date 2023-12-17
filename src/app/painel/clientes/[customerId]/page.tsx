'use client'

import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams();
  const customerId = params.customerId;
  return (
    <div>
      <SectionTitle title='Cliente'/>
      <div className='border-gray-400 border-dashed rounded p-5'>
        {customerId}
      </div>
    </div>
  )
}

export default page