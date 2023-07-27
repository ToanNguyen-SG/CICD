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
      className='background-start pl-[157px] pr-[157px]'>
      <div>
        <div className='mb-14 '>
          <div className='text-[40px] text-[#17C5C5] mt-8'>Print design</div>
          <div className='text-[18px] text-[#FFFFFF] mt-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of.
          </div>
          <div className='mt-8 flex justify-center '>
            <img src='/services/printDesign/ASSET10-03-01.png' />
          </div>
        </div>
        <Row gutter={16}>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <div className='max-w-[330px] max-h-[330px]'>
                  <img src='/services/gameArt/Rectangle31.png' />
                </div>
                <div className='max-w-[330px] max-h-[330px]'>
                  <img src='/services/gameArt/Rectangle51.png' />
                </div>
              </Col>
              <Col span={12}>
                <div className='max-w-[330px] max-h-[330px]'>
                  <img src='/services/gameArt/Rectangle52.png' />
                </div>
                <div className='max-w-[330px] max-h-[330px]'>
                  <img src='/services/gameArt/Rectangle53.png' />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12} className='flex flex-col justify-center'>
            <div className='text-[#17C5C5] text-[40px]'>Prop & objects design</div>
            <div className='text-[#FFF] text-[18px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.
            </div>
          </Col>
        </Row>

        <Row gutter={32}>
          <Col span={12} className='flex flex-col justify-center'>
            <div className='text-[#17C5C5] text-[40px]'>Illustrations</div>
            <div className='text-[#FFF] text-[18px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.
            </div>
          </Col>

          <Col span={12}>
            <div className='flex justify-center max-w-[606px] max-h-[606px]'>
              <img src='/services/gameArt/Ellipse13.png' />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
