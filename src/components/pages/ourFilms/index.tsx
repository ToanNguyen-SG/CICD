import { getAllOurService } from '@/services/ourService'
import { OurType, OurTypeEnum } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { Col, Row } from 'antd'
import React from 'react'

export default function OurFilms() {
  const { data: films } = useQuery(['allOurPhim'], (): Promise<OurType[]> => {
    return getAllOurService(OurTypeEnum.films) || []
  })

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
            {films?.slice(0, 9).map(i => {
              return <img key={i.id} style={{ objectFit: 'cover' }} src={i.thumbnailImage} />
            })}
          </div>
        </Col>
        <Col className='flex justify-end' span={4}>
          <img src='/ourFilm/right.png' />
        </Col>
      </Row>
    </div>
  )
}
