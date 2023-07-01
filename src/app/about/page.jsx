import AboutCard from '@/components/about/aboutCard'
import React from 'react'

const images = ['aboutImage/clock.svg', 'aboutImage/robo.svg', 'aboutImage/car.svg']

const About = () => {
  return (
    <div className='flex w-full h-full justify-around'>
      {images.map(item => (
        <AboutCard url={item} />
      ))}
    </div>
  )
}

export default About
