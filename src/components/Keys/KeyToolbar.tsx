import Link from 'next/link'
import React from 'react'

const KeyToolbar = () => {
  const handleBlades = () => {
    navigator
  }
  return (
    <div className='border-2 border-neutral-300 rounded-sm w-full flex flex-row  my-3 p-2'>
      <Link href='' className='rounded-md bg-green-400 m-1 py-1 px-2 text-sm text-white'>Nova chave!</Link>
      <Link href='' className='rounded-md bg-blue-400 m-1 py-1 px-2 text-sm text-white'>Tipos</Link>
      <Link href='keys/blades' className='rounded-md bg-yellow-500 m-1 py-1 px-2 text-sm text-white'>Lâminas</Link>
    </div>
  )
}

export default KeyToolbar