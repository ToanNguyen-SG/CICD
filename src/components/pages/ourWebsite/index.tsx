import { Col, Row } from 'antd'
import React from 'react'
import './index.css'
import OurMobile from './OurMobile'
import OurWebsite from './OurWebsite'
export default function OurWebsiteAndMobile() {
  return (
    <div style={{ width: '100%' }}>
      <Row gutter={24}>
        <Col xl={6} lg={6} md={6} sm={24} xs={24} className='logo-voi_desktop'>
          <div className='w-full h-full'>
            <img src='/ourMobile/Voi_pose_42.png' className='voi-desktop' />
          </div>
        </Col>

        <Col xl={18} lg={18} md={18} sm={24} xs={24}>
          <div style={{ paddingRight: '8%' }} className='w-full h-full'>
            <OurWebsite />

            <OurMobile />
          </div>
        </Col>
        <Col xl={6} lg={6} md={6} sm={24} xs={24} className='logo-voi_mobile'>
          <div className='w-full h-full'>
            <img src='/ourMobile/Voi_mobile.png' className='voi-mobile' />
          </div>
        </Col>
      </Row>
    </div>
  )
}
