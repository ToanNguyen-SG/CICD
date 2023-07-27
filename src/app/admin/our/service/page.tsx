'use client'
import { deleteOurService, getAllOurService } from '@/services/ourService'
import { OurTypeEnum } from '@/types'
import { DeleteOutlined, EyeFilled } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, Row, Select } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface DataType {
  createdAt: string
  description: string
  isDeleted: boolean
  name: string
  thumbnailImage: string
  id: string
}

const selectItems = [
  {
    label: 'Game',
    value: 'game',
  },
  {
    label: 'Service',
    value: 'service',
  },
  {
    label: 'Website',
    value: 'website',
  },
  {
    label: 'Mobile App',
    value: 'mobileApp',
  },
  {
    label: 'Campaigns',
    value: 'campaigns',
  },
  {
    label: 'Films',
    value: 'films',
  },
]

export default function page() {
  const router = useRouter()
  const [ourTypeSelected, setOurTypeSelected] = useState(OurTypeEnum.service.toString())

  const {
    data: allOurServices,
    isLoading,
    refetch,
  } = useQuery(['allOurServices', ourTypeSelected], () => {
    return getAllOurService(ourTypeSelected)
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
      toast.success('Delete Successfully!!!')
    },
    onError: () => {
      toast.error('Err,pls try again!!!')
    },
    onSettled: () => {
      refetch()
    },
  })

  const handelChangeSelect = (value: string) => {
    setOurTypeSelected(value)
  }

  return (
    <div className='w-full h-full'>
      <Card
        className='w-full h-full'
        title='Our Service'
        extra={
          <Row gutter={16}>
            <Col>
              <Select
                defaultValue={OurTypeEnum.service.toString()}
                onChange={handelChangeSelect}
                style={{ minWidth: 220 }}
                options={selectItems}
                placeholder='Select type'
              />
            </Col>
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
