import { Col, Row } from 'antd'
import React from 'react'
import './index.css'
import OurMobile from './OurMobile'
import OurWebsite from './OurWebsite'
export default function OurWebsiteAndMobile() {
  return (
    <div style={{ width: '100vw' }}>
      <Row>
        <Col span={6}>
          <div style={{ paddingTop: '40%' }} className='w-full h-full'>
            <img src='/ourMobile/Voi_pose_42.png' />
          </div>
        </Col>

        <Col span={18}>
          <div style={{ paddingRight: '8%' }} className='w-full h-full'>
            <OurWebsite />

            <OurMobile />
          </div>
        </Col>
      </Row>
    </div>
  )
}
