import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row items-stretch h-screen'>
      <div className='w-2/5 bg-zinc bg-green-300 h-full'>
        <h1>Login</h1>
      </div>
      <div className='bg-slate-400 h-full w-full'>
        <h1>Background</h1>
      </div>
    </div>
  )
}

export default page