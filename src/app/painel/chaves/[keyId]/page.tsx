'use client'

import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { getAllKeys, readKey } from '@/store/features/keySlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

import 'car-makes-icons/dist/style.css'
import KeyCard from '@/components/Keys/KeyCard'

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
      <KeyCard keyModel={key}/>
    </div>
  )
}

export default page