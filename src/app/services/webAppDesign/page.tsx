'use client'

import React, { useCallback } from 'react'
import './index.css'
import { Col, Row } from 'antd'
import UXButton from '@/components/UXButton'
export default function LogoAndBrand() {
  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
      className='background-start '>
      <div className='pl-[157px] pr-[157px]'>
        <div className='mb-14 '>
          <div className='text-[40px] text-[#17C5C5] mt-8'>Print design</div>
          <div className='text-[18px] text-[#FFFFFF] mt-7 mb-11'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>

          <UXButton />

          <div className='mt-8 flex justify-center '>
            <img src='/services/webApp/webApp1.png' />
          </div>
        </div>

        <Row gutter={32}>
          <Col span={12}>
            <div className='text-[#17C5C5] text-[40px]'>Mobile app</div>
            <div className='text-[#FFF] text-[18px] mt-[50px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.
            </div>
            <UXButton className='mt-[54px]' />
          </Col>

          <Col span={12}>
            <div className='flex justify-center max-w-[1243px] max-h-[836px] w-'>
              <img
                className='w-full h-full'
                style={{ objectFit: 'cover' }}
                src='/services/webApp/webApp2.png'
              />
            </div>
          </Col>
        </Row>
        <Row className='mt-[116px] flex flex-col text-center'>
          <div className='text-[40px] text-[#17C5C5]'>Landing Page Design</div>
          <div className='text-[18px] text-[#FFF] max-w-[1200px] mt-[30px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>
        </Row>
      </div>
      <div className='mt-[80px]'>
        <img className='w-full object-cover' src='/services/webApp/Rectangle46.png' />
      </div>
    </div>
  )
}
