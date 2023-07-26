import React from 'react'

const KeyToolbar = () => {
  return (
    <div className='border-2 border-neutral-300 rounded-md w-full flex flex-row  my-3 p-2'>
      <button className='rounded-md bg-green-400 m-1 py-1 px-2 text-sm text-white'>Nova chave!</button>
      <button className='rounded-md bg-blue-400 m-1 py-1 px-2 text-sm text-white'>Tipos</button>
      <button className='rounded-md bg-yellow-400 m-1 py-1 px-2 text-sm text-white'>Lâminas</button>
    </div>
  )
}

export default KeyToolbar