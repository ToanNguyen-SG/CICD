import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { Row } from 'antd'
import { OurType, OurTypeEnum } from '@/types'
import { getAllOurService } from '@/services/ourService'
import { useQuery } from '@tanstack/react-query'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function OurGamePage() {
  const [gameCurrent, setGameCurrent] = useState<OurType>()
  const customSlider = useRef()

  const { data: games } = useQuery(['allOurGame'], (): Promise<OurType[]> => {
    return getAllOurService(OurTypeEnum.game) || []
  })

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log('before change', currentSlide, nextSlide)
    },
    afterChange: function (currentSlide: any) {
      console.log('after change', currentSlide)
      if (games) {
        setGameCurrent(games[currentSlide])
      }
    },
  }

  useEffect(() => {
    if (games) {
      setGameCurrent(games[0])
    }
  }, games)

  const previous = () => {
    if (customSlider?.current) {
      customSlider.current.slickNext()
    }
  }

  const next = () => {
    if (customSlider?.current) {
      customSlider.current.slickPrev()
    }
  }

  return (
    <div className='about-background-start mt-[104px] mb-[104px]'>
      <div className='ourGame_Title flex  mb-8 text-center justify-center'>Our Games</div>
      <Row>
        <div style={{ flex: 3 }} className='flex flex-col'>
          <div style={{ flex: 1 }} className='flex items-center justify-center flex-col'>
            <img onClick={previous} src='icons/sharp-play-arrow-top.svg' />
            <div className='flex justify-center items-center flex-col'>
              <Slider ref={customSlider} className='w-[120px]' {...settings}>
                {games?.map((i, index) => {
                  return (
                    <div className='w-[135px] h-[130px] ' key={index}>
                      <img
                        className='w-full h-full object-cover'
                        style={{
                          marginBottom: '5%',
                          marginTop: '5%',
                          opacity: i.id === gameCurrent?.id ? 1 : 0.3,
                        }}
                        src={i.thumbnailImage}
                      />
                    </div>
                  )
                })}
              </Slider>
            </div>
            <img onClick={next} src='icons/sharp-play-arrow-bottom.svg' />
          </div>
        </div>
        <div style={{ flex: 4, padding: '0 40px' }} className='flex flex-col items-center'>
          <div className='w-[936.581px] h-[447.435px]'>
            <img className='w-full h-full object-cover' src={gameCurrent?.items[0]?.image} />
          </div>

          <div className='min-h-[105px]'>
            <p className='text-[#17C5C5] text-[30px]'>{gameCurrent?.name}</p>
            <p className='text-[#FFFFFF] text-[16px] text-center mb-12'>
              {gameCurrent?.description}
            </p>
          </div>
          <button className='ourGame_Button'>View details</button>
        </div>
      </Row>
    </div>
  )
}
