

import Header from '@/components/Header/Header'
import { authOptions } from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const layout = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)
  if(!session){
    redirect('/login')
  }
  return (
    <div className='bg-slate-100 w-full'>
      <Header/>
    </div>
  )
}

export default layout