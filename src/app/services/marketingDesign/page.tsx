'use client'

import React, { useCallback } from 'react'
import './index.css'
import { Col, Row } from 'antd'
export default function LogoAndBrand() {
  const item = useCallback(() => {
    return (
      <Col span={8} className='items-center flex flex-col justify-center'>
        <div className='text-[20px] text-[#17C5C5] text-center pr-3'>Social media design</div>
        <div
          style={{ borderRight: '1px solid #1AA382' }}
          className='flex justify-center items-center flex-col pr-3'>
          <div className='text-[#FFF] text-[18px] mt-8 mb-14 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>
          <button
            style={{ border: '1px solid #17C5C5', backgroundColor: '#17C5C5' }}
            className='w-[286px] rounded-[8px] h-[65px] text-[#FFF]'>
            Request quotation
          </button>
        </div>
      </Col>
    )
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        display: 'flex',
        justifyContent: 'center',
      }}
      className='background-start'>
      <div>
        <div className='mb-14 pl-[157px] pr-[157px]'>
          <div className='text-[40px] text-[#17C5C5] mt-8'>Marketing Design</div>
          <div className='text-[18px] text-[#FFFFFF] mt-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>
          <div style={{ border: '1px solid #1AA9A9' }} className='mt-8 rounded-[16px]'>
            <img className='rounded-[16px]' src='/services/marketingDesign/Asset.png' />
          </div>
        </div>

        <Row gutter={32} className='pl-[80px] pr-[80px]'>
          {item()}
          {item()}
          {item()}
        </Row>
      </div>
    </div>
  )
}
