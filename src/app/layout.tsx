import '../styles/global.css'

import { ReactNode } from 'react'

import { Header } from '@/components/Header'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime Fire',
  description: 'Redesign AnimeFire.com',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-heroBackground w-full h-full">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  )
}
