'use client'
import ItemDetailCard from '@/components/ItemDetailCard'
import { useQuery } from '@tanstack/react-query'
import { Card, Col, Collapse, Row, Spin, Tabs, TabsProps } from 'antd'
import React from 'react'

import Table, { ColumnsType } from 'antd/es/table'
import { getRequestById } from '@/services/quoteService'

export default function page({ params }: any) {
  const { id } = params

  const { data, isLoading } = useQuery(['detailRequest'], (): Promise<any> => {
    return getRequestById(id)
  })

  const columns: ColumnsType<any> = [
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question',
    },
    {
      title: 'Answer',
      dataIndex: 'answer',
      key: 'answer',
    },
  ]

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
                      <ItemDetailCard title='Company' value={data?.company || '--'} />
                    </Col>
                  </Row>

                  <Row gutter={32} className='mt-4'>
                    <Col span={12}>
                      <ItemDetailCard title='Email' value={data?.email || '--'} />
                    </Col>
                    <Col span={12}>
                      <ItemDetailCard title='Phone' value={data?.phone || '--'} />
                    </Col>
                  </Row>
                  <Row gutter={32} className='mt-4'>
                    <Col span={12}>
                      <ItemDetailCard title='Position' value={data?.position || '--'} />
                    </Col>
                  </Row>
                </Spin>
              ),
            },
            {
              key: '2',
              label: <b>Answer</b>,
              children: (
                <div className='w-full h-full'>
                  <Spin spinning={isLoading}>
                    <Table
                      scroll={{ x: 'max-content', y: 500 }}
                      columns={columns}
                      rowKey={record => record.id}
                      dataSource={data?.requestAnswers || []}
                      loading={isLoading}
                    />
                  </Spin>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </div>
  )
}
