import React, { useMemo } from 'react'

export default function LeftBar() {
  const icons = useMemo(
    () => [
      'icons/Behance.svg',
      'icons/Dribbble.svg',
      'icons/fa-brands_artstation.svg',
      'icons/Facebook.svg',
      'icons/Youtube.svg',
      'icons/Behance.svg',
    ],
    []
  )

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        className='flex items-center justify-center h-full '
        style={{ flexDirection: 'column', alignItems: 'center' }}>
        {icons?.map(item => (
          <span key={item} className='w-6 h-6 mb-8'>
            <img src={item} />
          </span>
        ))}
      </div>
    </div>
  )
}
