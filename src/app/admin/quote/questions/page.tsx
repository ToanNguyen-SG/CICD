'use client'

import { deleteQuestionById, getAllQuestion } from '@/services/quoteService'
import { DeleteOutlined, EditFilled, EyeFilled } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, Modal, Row } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface DataType {
  createdAt: string
  description: string
  isDeleted: boolean
  name: string
  id: string
}

export default function page() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idWantDeleted, setIdWantDeleted] = useState('')

  const {
    data: allQuestion,
    isLoading,
    refetch,
  } = useQuery(['allQuestion'], () => {
    return getAllQuestion()
  })

  const deleteMutation = useMutation(deleteQuestionById, {
    onSuccess: () => {
      toast.success('Delete success!!!')
      setIsModalOpen(false)
      setIdWantDeleted('')
      refetch()
    },
    onError: () => {
      toast.error('Err,Pls Try again')
    },
  })

  const handleDelete = (id: string) => {
    setIdWantDeleted(id)
    setIsModalOpen(true)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'View',
      dataIndex: 'id',
      key: 'view',
      render: id => {
        return (
          <Row gutter={16}>
            <Col>
              <Button
                onClick={() => router.push(`/admin/quote/questions/${id}`)}
                icon={<EyeFilled className='text-[18px]' />}
              />
            </Col>
            <Col>
              <Button
                onClick={() => router.push(`/admin/quote/questions/edit/${id}`)}
                icon={<EditFilled className='text-[18px]' />}
              />
            </Col>

            <Col>
              <Button
                onClick={() => handleDelete(id)}
                icon={<DeleteOutlined className='text-[18px]' />}
              />
            </Col>
          </Row>
        )
      },
    },
  ]

  const handleOk = () => {
    deleteMutation.mutate(idWantDeleted)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='w-full h-full'>
      <Modal title='Delete Question' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure to delete this category?</p>
      </Modal>
      <Card
        className='w-full h-full'
        title='Our Question'
        extra={
          <Row>
            <Col>
              <Button onClick={() => router.push('/admin/quote/questions/create')}>Create</Button>
            </Col>
          </Row>
        }>
        <Table
          scroll={{ x: 'max-content' }}
          columns={columns}
          rowKey={record => record.id}
          dataSource={allQuestion || []}
          loading={isLoading}
        />
      </Card>
    </div>
  )
}
