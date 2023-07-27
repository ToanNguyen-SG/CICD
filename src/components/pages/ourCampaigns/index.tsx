import { Col, Row } from 'antd'
import React from 'react'

export default function OurCampaignsPage() {
  return (
    <div className='pl-16 pr-16 '>
      <div className='text-[40px] text-[#17C5C5] flex justify-center mt-10 mb-10'>
        Our Campaigns
      </div>
      <Row gutter={16}>
        <Col span={6}>
          <div className='mb-10'>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/minion1-1.png' />
          </div>
          <div>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/batman1-2.png' />
          </div>
        </Col>
        <Col span={6}>
          <div className='mb-10'>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/Rectangle2-1.png' />
          </div>
          <div>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/Rectangle2-2.png' />
          </div>
        </Col>
        <Col span={6}>
          <div className='mb-10'>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/Rectangle3-1.png' />
          </div>
          <div>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/Rectangle3-2.png' />
          </div>
        </Col>
        <Col span={6}>
          <div className='mb-10'>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/Rectangle4-1.png' />
          </div>
          <div>
            <img style={{ objectFit: 'cover' }} src='/ourCampaigns/Rectangle4-2.png' />
          </div>
        </Col>
      </Row>
      <div className='flex justify-center mt-14 mb-14'>
        <span>
          <img
            style={{ objectFit: 'cover', marginBottom: -20 }}
            src='/ourCampaigns/Voi_pose_3.png'
          />
          <button
            style={{ backgroundColor: '#17C5C5', borderRadius: 6 }}
            className='w-[259px] h-[57px] text-[#FFFFFF] text-[18px]'>
            More
          </button>
        </span>
      </div>
    </div>
  )
}
