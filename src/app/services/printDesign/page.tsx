'use client'

import React, { useCallback } from 'react'
import './index.css'
import { Col, Row } from 'antd'
export default function LogoAndBrand() {
  const item = useCallback(() => {
    return (
      <Col span={6} className='items-center flex flex-col justify-center'>
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
            className='min-w-[160px]  rounded-[8px] h-[65px] text-[#FFF]'>
            Request quotation
          </button>
        </div>
      </Col>
    )
  }, [])

  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
      className='background-start '>
      <div>
        <div className='mb-14 pl-[157px] pr-[157px]'>
          <div className='text-[40px] text-[#17C5C5] mt-8'>Print design</div>
          <div className='text-[18px] text-[#FFFFFF] mt-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>
          <div className='mt-8 '>
            <img src='/services/printDesign/ASSET10-03-01.png' />
          </div>
        </div>

        <Row gutter={16} className='pl-[80px] pr-[80px]'>
          {item()}
          {item()}
          {item()}
          {item()}
        </Row>
      </div>
      <div className='mt-[140px]'>
        <Row gutter={32} className='items-center'>
          <Col span={10}>
            <div className='text-[#17C5C5] text-[40px] text-right'>Menu design</div>
          </Col>

          <Col className='text-[18px] text-[#FFF]' span={10}>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          </Col>
        </Row>
        <Row className='mt-14'>
          <img src='/services/printDesign/ASSET11-02-011.png' />
        </Row>
      </div>
    </div>
  )
}
