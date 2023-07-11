import React from 'react'
import SidebarItem from './SidebarItem'

const links = [
  {
    title: "Painel",
    url: "/dashboard",
  },
  {
    title: "Chaves",
    url: "/keys",
  },
];

const Sidebar = () => {
  return (
    <aside className='bg-green-400 w-1/5 h-screen sticky'>
      {links.map((link, key) => (
        <SidebarItem key={key} title={link.title} url={link.url}/>
      ))}
    </aside>
  )
}

export default Sidebar