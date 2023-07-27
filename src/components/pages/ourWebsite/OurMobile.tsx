import { Col, Row } from 'antd'
import React from 'react'

export default function OurMobile() {
  return (
    <Col className='mt-[107px]' span={24}>
      <div className='ourWebsite_Title '>Our Mobile Apps</div>
      <Row gutter={[16, 16]} className='mt-[29px]'>
        <Col span={6}>
          <img src='/ourMobile/Classic1.png' />
        </Col>
        <Col span={6}>
          <img src='/ourMobile/Classic2.png' />
        </Col>
        <Col span={6}>
          <img src='/ourMobile/Classic3.png' />
        </Col>
        <Col span={6}>
          <img src='/ourMobile/Classic4.png' />
        </Col>
      </Row>
      <div
        style={{ fontWeight: 600, lineHeight: '150%' }}
        className='text-[#76768E] text-[36px] h-[75px] mt-[38px]'>
        Play-to-Earn casual playground of the Polygon
      </div>
      <div className='text-[16px] text-[#FFF] mb-10'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </div>
    </Col>
  )
}
