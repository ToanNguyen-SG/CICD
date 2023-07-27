import Link from 'next/link'
import React from 'react'

const menuItems = [
  {
    name: 'Game Art',
    url: '/services/gameArt',
  },
  {
    name: 'Video & Animations',
    url: '/services/videoAnimation',
  },
  {
    name: '2D Design',
    url: '',
  },
  {
    name: 'Web & App Design',
    url: '/services/webAppDesign',
  },
  {
    name: 'Logo & Brand Identity',
    url: '/services/logoandbrand',
  },
  {
    name: '3D Design',
    url: '',
  },
  {
    name: 'Print Design',
    url: '/services/printDesign',
  },
  {
    name: 'Marketing Design',
    url: '/services/marketingDesign',
  },
  {
    name: 'Film',
    url: '',
  },
]

export default function DropDownMenu() {
  return (
    <div
      style={{
        width: 541,
        position: 'absolute',
        borderRadius: 16,
        border: '1px solid #17C5C5',
        backgroundColor: 'black',
        zIndex: 9999,
        padding: ' 8px 26px',
      }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1fr',
        }}>
        {menuItems.map((item, idx) => (
          <Link className='text-[#696969] text-[18px] flex items-center' key={idx} href={item.url}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
