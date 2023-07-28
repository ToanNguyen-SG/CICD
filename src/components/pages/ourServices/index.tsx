import { Button, Col, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import './index.css'
import Services from './Services'
import { useQuery } from '@tanstack/react-query'
import { getAllOurService } from '@/services/ourService'
import { OurType, OurTypeEnum } from '@/types'

export default function OurServices() {
  const [serviceSelected, setServiceSelected] = useState<OurType>()

  const { data: services } = useQuery(['allOurService'], (): Promise<OurType[]> => {
    return getAllOurService(OurTypeEnum.service) || []
  })

  useEffect(() => {
    if (services && services.length > 0) {
      setServiceSelected(services[0])
    }
  }, [services])

  const buttonRender = useCallback(() => {
    return (
      <Row id='Project'>
        {services?.map(i => (
          <Col xl={6} lg={6} md={12} sm={12} xs={24} className='max-[640px]:text-center'>
            <Button
              onClick={() => setServiceSelected(i)}
              style={{
                borderRadius: 6,
                border: '1px solid var(--color-1, #17C5C5)',
                background:
                  i.id === serviceSelected?.id
                    ? 'var(--color-1, #17C5C5)'
                    : 'var(--input, rgba(20, 100, 100, 0.20))',
              }}
              className='h-[60px] text-[#FFFFFF] text-[20px] mr-8 mb-2 '>
              {i.name}
            </Button>
          </Col>
        ))}
      </Row>
    )
  }, [services, serviceSelected])

  return (
    <div
      className='our_container'
      style={{ width: '100%', paddingLeft: '10vw', paddingRight: '1vw' }}>
      <Row className='mt-[83px]' gutter={24}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className='our_title'>Our Services</div>
          {buttonRender()}
          <div className='our_content pr-10'>{serviceSelected?.description}</div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Services service={serviceSelected ? serviceSelected.items : []} />
        </Col>
      </Row>
    </div>
  )
}
