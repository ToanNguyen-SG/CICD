import { Col, Row } from 'antd'
import React from 'react'

export default function OurFilms() {
  return (
    <div className='mb-[110px]'>
      <Row>
        <Col span={4}>
          <div className='relative'>
            <img
              className='absolute'
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              src='/ourFilm/Voi_pose_4.png'
            />
            <img src='/ourFilm/left.png' />
          </div>
        </Col>
        <Col span={16}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridRowGap: 28,
              paddingTop: 64,
            }}>
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle1.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle2.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle3.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle4.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle5.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle6.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle7.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle8.png' />
            <img style={{ objectFit: 'cover' }} src='/ourFilm/Rectangle9.png' />
          </div>
        </Col>
        <Col className='flex justify-end' span={4}>
          <img src='/ourFilm/right.png' />
        </Col>
      </Row>
    </div>
  )
}
