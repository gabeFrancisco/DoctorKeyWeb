import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row items-stretch h-screen'>
      <div className='w-2/5 bg-zinc bg-gradient-to-tr from-green-200 to-green-400 h-full flex flex-col justify-center items-center'>
        <div className='bg-slate-200 p-3 rounded-lg shadow-lg h-2/5'>
          <form>
            <div className='m-5'>
              <label htmlFor="user">
                Usuário
              </label>
              <input type="text" />
            </div>
            <div className='m-5'>
              <label htmlFor="password">
                Senha
              </label>
              <input type="password" />
            </div>
            <div>
              <button className='rounded-lg px-3 py-1 bg-green-400 text-white' type='button'>
                Entrar!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-slate-200 h-full w-full'>
        <h1>Doctor Key</h1>
      </div>
    </div>
  )
}

export default page