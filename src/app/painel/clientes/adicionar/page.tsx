import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { useAppDispatch } from '@/store/store';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {}
  })

  return (
    <div>
      <SectionTitle title='Novo cliente' subtitle='Adicione um novo cliente ao seu sistema nessa seção.'/>
      <div className='border-2 border-gray-300 border-dashed rounded-lg mt-5 mx-5'>

      </div>
    </div>
  )
}

export default page