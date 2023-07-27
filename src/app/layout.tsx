'use client'

import Providers from '@/utils/provider'

import './globals.css'
import React, { useCallback } from 'react'
import AdminLayout from '@/container/AdminLayout'
import UserLayout from '@/container/UserLayout'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()

  const router = useCallback(() => {
    if (pathName.includes('admin')) {
      return <AdminLayout children={children} />
    } else if (pathName.includes('quote')) {
      return children
    } else {
      return <UserLayout children={children} />
    }
  }, [children, pathName])

  return (
    <html lang='en'>
      <body
        className='scroll-container'
        style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
        <Providers>{router()}</Providers>
      </body>
    </html>
  )
}
