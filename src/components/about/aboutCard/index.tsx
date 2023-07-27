import React from 'react'

type Props = {
  url: string
  point: string
  title: string
  pointColor: string
}

export default function AboutCard({ url, point, title, pointColor }: Props) {
  return (
    <div className='h-full flex items-center justify-center flex-col' style={{ flex: 1 }}>
      <div className='mb-[40px]'>
        <img className='zoom-rotate' src={url} />
      </div>
      <div style={{ color: pointColor }} className={`mb-2 text-[60px] `}>
        {point}
      </div>
      <div className='text-[28px] text-[#FFFFFF] '>{title}</div>
    </div>
  )
}
