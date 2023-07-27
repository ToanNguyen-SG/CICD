import React from 'react'
import './index.css'
import { Col, Row } from 'antd'

export default function Footer() {
  return (
    <div className='flex w-full h-[283px] footer_container px-[60px] pt-9'>
      <Row className='w-full h-full'>
        <Col span={5}>
          <div>
            <img style={{ objectFit: 'cover' }} src='/image/logo.svg' />
          </div>
        </Col>
        <Col span={15}>
          <Row>
            <Col span={12}>
              <div className='text-[18px] text-[#FFF] mb-[30px]'>Email: sales@uxpon.com</div>
              <div className='text-[18px] text-[#FFF] mb-[30px]'>
                Vietnamese Phone: (+84) 394 069 084
              </div>
              <div className='text-[18px] text-[#FFF]'>Laos Phone: (+84) 394 069 084</div>
            </Col>
            <Col span={4}>
              <div className='text-[18px] text-[#FFF] mb-[30px]'>About us</div>
              <div className='text-[18px] text-[#FFF] mb-[30px]'>Blog</div>
              <div className='text-[18px] text-[#FFF] '>Services</div>
            </Col>
            <Col span={8}>
              <div className='text-[18px] text-[#FFF] mb-[30px]'>Pay-As-You-Go service</div>
              <div className='text-[18px] text-[#FFF] mb-[30px]'>Reviews on Clutch.io</div>
              <div className='text-[18px] text-[#FFF] '>Quote Calculator</div>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <button
            style={{ backgroundColor: 'rgba(105, 237, 255, 0.69)', borderRadius: '50%' }}
            className='w-[68px] h-[68px]'>
            TOP
          </button>
        </Col>
      </Row>
    </div>
  )
}
