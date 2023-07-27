'use client'
import { deleteOurService, getAllOurService } from '@/services/ourService'
import { DeleteOutlined, EyeFilled } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, Row } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/navigation'
import React from 'react'

interface DataType {
  createdAt: string
  description: string
  isDeleted: boolean
  name: string
  id: string
}

export default function page() {
  const router = useRouter()

  const {
    data: allOurServices,
    isLoading,
    refetch,
  } = useQuery(['allOurServices'], () => {
    return getAllOurService()
  })

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: description => {
        return <div style={{ maxWidth: 480 }}>{description}</div>
      },
    },
    {
      title: 'View',
      dataIndex: 'id',
      key: 'view',
      render: id => {
        return (
          <Row>
            <Col>
              <Button
                onClick={() => router.push(`/admin/our/service/${id}`)}
                icon={<EyeFilled className='text-[18px]' />}
              />
            </Col>
            <Col>
              <Button
                onClick={() => deleteMutation.mutate(id)}
                icon={<DeleteOutlined className='text-[18px]' />}
              />
            </Col>
          </Row>
        )
      },
    },
  ]

  const deleteMutation = useMutation(deleteOurService, {
    onSuccess: () => {
      console.log('thanh cong')
    },
    onError: () => {
      console.log('err')
    },
    onSettled: () => {
      refetch()
    },
  })

  return (
    <div className='w-full h-full'>
      <Card
        className='w-full h-full'
        title='Our Service'
        extra={
          <Row>
            <Col>
              <Button onClick={() => router.push('/admin/our/service/create')}>Create</Button>
            </Col>
          </Row>
        }>
        <Table
          scroll={{ x: 'max-content' }}
          columns={columns}
          rowKey={record => record.id}
          dataSource={allOurServices || []}
          loading={isLoading}
        />
      </Card>
    </div>
  )
}
