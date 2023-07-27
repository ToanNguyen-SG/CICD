'use client'
import { deleteOurService, getAllOurService } from '@/services/ourService'
import { OurTypeEnum } from '@/types'
import { DeleteOutlined, EyeFilled } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Row } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/navigation'
import React from 'react'

interface DataType {
  createdAt: string
  description: string
  isDeleted: boolean
  name: string
  thumbnailImage: string
  id: string
}

export default function page() {
  const router = useRouter()

  const {
    data: allOurServices,
    isLoading,
    refetch,
  } = useQuery(['allOurServices'], () => {
    return getAllOurService(OurTypeEnum.website)
  })

  const columns: ColumnsType<DataType> = [
    {
      title: 'Thumbnail Image',
      dataIndex: 'thumbnailImage',
      key: 'thumbnailImage',
      render: thumbnailImage => {
        return (
          <div className='w-[48px] h-[48px]'>
            <img className='w-full h-full object-cover' src={thumbnailImage} />
          </div>
        )
      },
    },
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
                onClick={() => router.push(`/admin/our/website/${id}`)}
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
        title='Our Website'
        extra={
          <Row>
            <Col>
              <Button onClick={() => router.push('/admin/our/website/create')}>Create</Button>
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
