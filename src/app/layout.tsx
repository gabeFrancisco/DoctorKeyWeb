import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doctor Key',
  description: 'Gerenciador de chaves automotivas inteligente.',
  icons: ['favicon.ico']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
