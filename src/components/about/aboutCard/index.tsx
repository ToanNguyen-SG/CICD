import React from 'react'

type Props = {
  url: string
}

export default function AboutCard({ url }: Props) {
  return (
    <div className='h-full flex items-center justify-center flex-col' style={{ flex: 1 }}>
      <div className='mb-[40px]'>
        <img src={url} />
      </div>
      <div className='mb-[40px] text-[30px] text-[#17C5C5]'>10K+</div>
      <div className='text-[24px] text-[#FFFFFF] '>Design hours</div>
    </div>
  )
}
