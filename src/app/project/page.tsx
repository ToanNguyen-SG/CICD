import React from 'react'

export default function Project() {
  return (
    <div className='flex w-full h-full'>
      <div style={{ flex: 3 }} className='flex'>
        <div style={{ flex: 1 }} className='flex items-center justify-center'>
          <img src='icons/sharp-arrow-left.svg' />
        </div>
        <div style={{ flex: 1 }} className='flex items-center justify-center flex-col'>
          <img style={{ marginBottom: '15%' }} src='project/logofishhunt.svg' />
          <img style={{ marginBottom: '15%' }} src='project/logofishhunt.svg' />
          <img src='project/logofishhunt.svg' />
        </div>
        <div style={{ flex: 1 }} className='flex items-center justify-center'>
          <img src='icons/sharp-arrow-right.svg' />
        </div>
      </div>
      <div style={{ flex: 4 }} className='flex flex-col items-center'>
        <img style={{ width: '60%' }} src='project/fishHunter.svg' />

        <p className='text-[#17C5C5] text-[30px]'>Fish Hunter Gameplay</p>
        <p className='text-[#FFFFFF] text-[16px] text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}
