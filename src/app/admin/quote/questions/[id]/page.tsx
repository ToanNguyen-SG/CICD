'use client'
import { useQuery } from '@tanstack/react-query'
import { Card, Col, Collapse, Row, Spin, Tabs, TabsProps } from 'antd'
import React from 'react'

import Table, { ColumnsType } from 'antd/es/table'
import { getQuestionById, getRequestById } from '@/services/quoteService'
import ItemDetailCard from '@/components/ItemDetailCard'
import { QuestionsType } from '@/types'
import { DeleteOutlined, EditFilled } from '@ant-design/icons'

export default function page({ params }: any) {
  const { id } = params

  const { data, isLoading } = useQuery(
    ['detailQuestion', id],
    (): Promise<QuestionsType> => {
      return getQuestionById(id)
    },
    {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )
  const columns: ColumnsType<any> = [
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Edit',
      dataIndex: 'id',
      key: 'id',
      render: id => {
        return (
          <Row>
            <Col>
              <DeleteOutlined />
            </Col>
            <Col>
              <EditFilled />
            </Col>
          </Row>
        )
      },
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
                      <ItemDetailCard title='Questions' value={data?.content || '--'} />
                    </Col>
                    <Col span={12}>
                      <ItemDetailCard title='Type' value={data?.type || '--'} />
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
                      dataSource={data?.answers || []}
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
