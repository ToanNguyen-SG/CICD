import AboutCard from '@/components/about/aboutCard'
import React from 'react'
import './index.css'
import { Col, Row } from 'antd'

const images = [
  {
    url: 'aboutImage/clock.svg',
    point: '10K+',
    title: 'Design hours',
    pointColor: '#FF003B',
  },
  {
    url: 'aboutImage/robo.svg',
    point: '20+',
    title: 'Expert/ senior artists',
    pointColor: '#0078FF',
  },
  {
    url: 'aboutImage/car.svg',
    point: '8 hours',
    title: 'To delivery',
    pointColor: '#00FF79',
  },
]

export default function AboutPage() {
  return (
    <Row
      gutter={24}
      id='About'
      style={{ width: '100%', padding: '0 10%' }}
      className='flex w-full h-full about-background-start '>
      {images.map(item => (
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <AboutCard
            key={item.url}
            url={item.url}
            point={item.point}
            pointColor={item.pointColor}
            title={item.title}
          />
        </Col>
      ))}
    </Row>
  )
}
