'use client'

import React from 'react'
import SidebarItem from './SidebarItem'
import { signOut, useSession } from 'next-auth/react';

const links = [
  {
    title: "Painel",
    url: "/dashboard",
  },
  {
    title: "Chaves",
    url: "/dashboard/keys",
  },
];

const Sidebar = () => {
  const { data, status} = useSession()
  return (
    <aside className='bg-green-400 w-1/5 h-screen sticky text-slate-100'>
      <div className='flex flex-col items-center m-5'>
      {status === 'authenticated' && data !== null && (<p>Bem vindo <i>{data.user?.name}</i></p>)}
      <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="text-teal-700 rounded-md hover:bg-green-200 py-1 bg-slate-100 shadow-lg px-7 m-2"
        >
          Sair
        </button>        
      </div>
      {links.map((link, key) => (
        <SidebarItem key={key} title={link.title} url={link.url}/>
      ))}
    </aside>
  )
}

export default Sidebar