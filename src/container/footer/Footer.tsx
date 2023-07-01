import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'

export default function Footer() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
      className='flex'>
      <div className='flex-1 flex justify-end text-[18px] text-[#FFFFFF]'>
        <span className='mr-5'>Press arrow</span>
        <span>
          <img src='icons/arrow-right.svg' />
        </span>
      </div>
      <div className='flex-1 flex items-center justify-end text-[18px] text-[#17C5C5]'>
        <ArrowLeftOutlined />

        <span className='mr-7 ml-7'>1/10</span>
        <ArrowRightOutlined />
      </div>
    </div>
  )
}
