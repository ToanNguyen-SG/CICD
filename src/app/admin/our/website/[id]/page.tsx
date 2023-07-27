'use client'
import ItemDetailCard from '@/components/ItemDetailCard'
import {  getDetailOurService } from '@/services/ourService'
import {  useQuery } from '@tanstack/react-query'
import {  Card, Col, Collapse, Row, Spin,  } from 'antd'
import React from 'react'
import {  OurServiceType } from '../type'


export default function page({ params }: any) {
  const { id } = params

  const { data, isLoading } = useQuery(['detailOurService', id], (): Promise<OurServiceType> => {
    return getDetailOurService(id)
  })

  return (
    <div className='w-full h-full'>
      <Card className='w-full h-full' title='Our Service'>
        <Collapse
          defaultActiveKey={['1', '2']}
          expandIconPosition='end'
          items={[
            {
              key: '1',
              label: <b>Information</b>,
              children: (
                <Spin size='small' spinning={isLoading}>
                  <Row gutter={32}>
                    <Col span={12}>
                      <ItemDetailCard title='Name' value={data?.name || '--'} />
                    </Col>
                    <Col span={12}>
                      <ItemDetailCard
                        title='Thumbnail Image'
                        value={
                          <div className='w-[68px] h-[68px]'>
                            <img className='w-full h-full' src={data?.thumbnailImage} />{' '}
                          </div>
                        }
                      />
                    </Col>
                  </Row>
                  <Row className='mt-4' gutter={32}>
                    <Col span={24}>
                      <ItemDetailCard title='Description' value={data?.description || '--'} />
                    </Col>
                  </Row>
                </Spin>
              ),
            },
          ]}
        />
      </Card>
    </div>
  )
}
