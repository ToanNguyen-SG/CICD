'use client'

import React, { useCallback } from 'react'
import './index.css'
import { Col, Row } from 'antd'
export default function LogoAndBrand() {
  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
      className='background-start pl-[157px] pr-[157px] '>
      <div>
        <div className='mb-14 '>
          <div className='text-[40px] text-[#17C5C5] mt-8'>Video Editing</div>
          <div className='text-[18px] text-[#FFFFFF] mt-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>
          <div className='mt-8 '>
            <img src='/services/videoAnimation/videoAnimation.gif' />
          </div>
          <div className='flex justify-center mt-11'>
            <button
              style={{ backgroundColor: '#17C5C5', borderRadius: 8 }}
              className='text-[#FFFF] w-[268px] h-[65px] '>
              Request quotation
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[60px]'>
        <Row className='items-center'>
          <Col span={12}>
            <div className='text-[#17C5C5] text-[40px]'>GIF Animation</div>
            <div className='text-[#FFF] text-[18px] mt-7'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of.
            </div>
          </Col>
          <Col span={12}>
            <div className='w-[543px] h-[436px]'>
              <img
                style={{ objectFit: 'cover' }}
                className='w-full h-full'
                src='/services/videoAnimation/animation2.gif'
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className='flex items-center flex-col mt-[108px]'>
        <div className='text-[#17C5C5] text-[40px]'>Lottie & Web animation</div>
        <div className='text-[#FFF] text-[18px] max-w-[746px]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of.
        </div>
      </div>
      <div className='mt-[100px]'>
        <img
          className='w-full h-full object-cover'
          src='/services/videoAnimation/videoAnimatetion3.gif'
        />
      </div>
    </div>
  )
}
