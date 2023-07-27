import AboutCard from '@/components/about/aboutCard'
import React from 'react'
import './index.css'

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
    <div
      id='About'
      style={{ width: '100vw', height: '60vh', padding: '0 10%' }}
      className='flex w-full h-full about-background-start '>
      {images.map(item => (
        <AboutCard
          key={item.url}
          url={item.url}
          point={item.point}
          pointColor={item.pointColor}
          title={item.title}
        />
      ))}
    </div>
  )
}
