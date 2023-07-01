import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

type LinkType = {
  id: number
  title: String
  url: Url
}

const links: LinkType[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Skills',
    url: '/skills',
  },
  {
    id: 4,
    title: 'Services',
    url: '/services',
  },
  {
    id: 5,
    title: 'Project',
    url: '/project',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
]

export default function Navbar() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
      }}
      className='flex justify-between items-center mt-8 '>
      <div style={{ flex: 2, marginLeft: 60 }}>
        <img src='image/logo.svg' />
      </div>

      <div style={{ flex: 6 }} className='flex'>
        {links.map(link => (
          <Link key={link.id} href={link.url} className='flex-1 text-[20px] text-[#17C5C5] '>
            {link.title}
          </Link>
        ))}
      </div>

      <div
        style={{ border: '1px solid #17C5C5', width: 69, height: 69, borderRadius: '50%' }}
        className='text-[#17C5C5] flex items-center justify-center mr-24'>
        <img src='icons/Vector.svg' />
      </div>
    </div>
  )
}
