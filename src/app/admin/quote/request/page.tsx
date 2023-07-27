'use client'

import { getAllRequest } from '@/services/quoteService'
import { EyeFilled } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'
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

  const { data: allRequest, isLoading } = useQuery(['allQuestion'], () => {
    return getAllRequest()
  })

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'View',
      dataIndex: 'id',
      key: 'view',
      render: id => {
        return (
          <>
            <Button
              onClick={() => router.push(`/admin/quote/request/${id}`)}
              icon={<EyeFilled className='text-[18px]' />}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='w-full h-full'>
      <Card className='w-full h-full' title='Request'>
        <Table
          scroll={{ x: 'max-content' }}
          columns={columns}
          rowKey={record => record.id}
          dataSource={allRequest || []}
          loading={isLoading}
        />
      </Card>
    </div>
  )
}
