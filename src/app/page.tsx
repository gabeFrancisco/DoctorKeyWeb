import Image from 'next/image'
import Logo from '../../public/drkey.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={Logo} alt='Logo'/>
      <h1 className='text-2xl'>Bem vindo ao <b>Doctor Key</b></h1>
      <h2>Seu gerenciador de chaves automotivas</h2>
        <Link className='bg-green-500 py-2 px-7 text-white rounded hover:bg-green-600 shadow-lg' href="/login">Login</Link>
    </main>
  )
}
