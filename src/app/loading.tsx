'use client'

import LoadingSkeleton from '@/components/LoadingSkeleton/LoadingSkeleton'
import React from 'react'
import Logo from '../../public/logo.svg'
import { motion } from 'framer-motion'
import Image from 'next/image'

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div>
        <Image className='w-56' src={Logo} alt='Logo'/>
      </motion.div>
      <LoadingSkeleton />
    </div>
  )
}

export default loading