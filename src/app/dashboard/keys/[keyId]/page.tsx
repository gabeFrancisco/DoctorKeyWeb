'use client'

import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { getAllKeys, readKey } from '@/store/features/keySlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

import 'car-makes-icons/dist/style.css'

const page = () => {
  const params = useParams()
  const keyId = params.keyId
  const dispatch = useAppDispatch()
  const key = useAppSelector(state => state.keys.key)
  
  useEffect(() => {
    dispatch(getAllKeys()).then(() => dispatch(readKey(keyId)))
  }, [])

  return (
    <div>
      <SectionTitle title='Chave' subtitle='Visualize, edite ou apague uma chave específica nessa seção.'/>
      <div className='m-5 border-2 border-gray-300 border-dashed rounded'>
        <div className='flex flex-row items-center justify-between p-2'>
          <i className={`mx-10 text-9xl car-${key.manufactor?.name.toLowerCase()}`}/>
          <h2 className='text-3xl font-bold text-gray-500 mx-10 my-3'>{key.model}</h2>
          <h2 className='text-3xl font-bold text-gray-500 mx-10 my-3'>{key.year}</h2>
        </div>
        <div className='border-t-2 border-gray-300 border-dashed m-5'></div>
        <div className='flex flex-row items-center justify-between m-5 text-gray-600'>
          <h3 className='text-lg'>Quantidade de botões: {key.buttons}</h3>
          <h3 className='text-lg'>Tipo: {key.keyType?.name}</h3>
          <h3 className='text-lg'>Lâmina: {key.bladeType?.name}</h3>
          <h3 className='text-lg'>Adicionada em: {key.createdAt}</h3>
        </div>

      </div>
    </div>
  )
}

export default page