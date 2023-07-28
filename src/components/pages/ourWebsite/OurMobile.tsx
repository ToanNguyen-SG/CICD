import { getAllOurService } from '@/services/ourService'
import { OurType, OurTypeEnum } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'

export default function OurMobile() {
  const [currentWebsite, setCurrentWebsite] = useState<OurType>()

  const { data: websites } = useQuery(['allOurMobile'], (): Promise<OurType[]> => {
    return getAllOurService(OurTypeEnum.mobileApp) || []
  })

  useEffect(() => {
    if (websites) {
      setCurrentWebsite(websites[0])
    }
  }, [websites])

  return (
    <Col className='mt-[107px]' span={24}>
      <div className='ourWebsite_Title '>Our Mobile Apps</div>
      <Row gutter={[16, 16]} className='mt-[29px]'>
        {currentWebsite?.items.map(i => {
          return (
            <Col key={i.id} span={6}>
              <img src={i.image} />
            </Col>
          )
        })}
      </Row>

      <Row className='mt-[23px]'>
        <Col span={14}>
          <div
            style={{ fontWeight: 600, lineHeight: '150%' }}
            className='text-[#76768E] text-[36px]'>
            {currentWebsite?.name}
          </div>
          <div className='text-[16px] text-[#FFF]'>{currentWebsite?.description}</div>
        </Col>
        <Col span={10}>
          <Row className='flex items-center mt-[60px] justify-end'>
            {websites?.map(i => {
              return (
                <>
                  {i.id === currentWebsite?.id ? (
                    <span
                      onClick={() => setCurrentWebsite(i)}
                      key={i.id}
                      style={{ backgroundColor: '#17C5C5', borderRadius: 31 }}
                      className='w-[35px] h-[12px] mr-1'></span>
                  ) : (
                    <span
                      onClick={() => setCurrentWebsite(i)}
                      key={i.id}
                      style={{ backgroundColor: 'rgba(20, 100, 100, 0.65)', borderRadius: '50%' }}
                      className='w-[12px] h-[12px] mr-1'></span>
                  )}
                </>
              )
            })}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}
