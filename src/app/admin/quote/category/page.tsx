'use client'

import {
  createCategoryQuestions,
  deleteCategoryQuestions,
  getCategoryQuestions,
  updateCategoryQuestions,
} from '@/services/quoteService'
import { CategoryType } from '@/types'
import { DeleteFilled, EditOutlined, SaveOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, Modal, Row, Space, Tabs } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function CategoryPage() {
  const [form] = useForm()

  const { data, refetch } = useQuery(['getCategoryQuestions'], (): Promise<CategoryType[]> => {
    return getCategoryQuestions()
  })

  const createMutation = useMutation(createCategoryQuestions, {
    onSuccess: () => {
      toast.success('Create Successfully!!!')
      form.resetFields()
      refetch()
    },
    onError: () => {
      toast.error('Error,Pls try again')
    },
  })

  const onFinish = (data: { content: string }) => {
    createMutation.mutate(data)
  }

  return (
    <>
      <Card className='w-full h-full' title='Category Question'>
        <Tabs
          defaultActiveKey='1'
          items={[
            {
              label: 'Views',
              key: '1',
              children: (
                <div>
                  {data?.map(item => (
                    <RowItem key={item?.id} refetch={refetch} data={item} />
                  ))}
                </div>
              ),
            },
            {
              label: 'Create',
              key: '2',
              children: (
                <Form
                  form={form}
                  name='basic'
                  layout='vertical'
                  onFinish={onFinish}
                  autoComplete='off'>
                  <Row gutter={24} className='mt-8 flex items-center'>
                    <Col span={8}>
                      <Form.Item
                        label='Category'
                        name='content'
                        rules={[{ required: true, message: 'Please input your category!' }]}>
                        <Input placeholder='Category....' />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Button htmlType='submit'>Create New </Button>
                    </Col>
                  </Row>
                </Form>
              ),
            },
          ]}
        />
      </Card>
    </>
  )
}

const RowItem = ({ data, refetch }: { data: CategoryType; refetch: () => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [valueUpdated, setValueUpdated] = useState(data.content)
  const [isUpdated, setIsUpdated] = useState(false)

  const handleOk = () => {
    deleteMutation.mutate(data.id)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const deleteMutation = useMutation(deleteCategoryQuestions, {
    onSuccess: () => {
      toast.success('Delete Successfully!!!')
      refetch()
    },
    onError: () => {
      toast.error('Error,Pls try again')
    },
    onSettled: () => {
      setIsModalOpen(false)
    },
  })

  const updateMutation = useMutation(updateCategoryQuestions, {
    onSuccess: () => {
      toast.success('Update Successfully!!!')
      refetch()
      setIsUpdated(false)
    },
    onError: () => {
      toast.error('Error,Pls try again')
    },
  })

  const onHandelUpdate = () => updateMutation.mutate({ id: data.id, content: valueUpdated })

  const handleValueChange = (e: any) => {
    setValueUpdated(e.target.value)
  }

  return (
    <>
      <Modal title='Delete Category' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure to delete this category?</p>
      </Modal>

      <Row className='mt-8' gutter={24}>
        {isUpdated ? (
          <Col span={8}>
            <Input onChange={handleValueChange} style={{ minHeight: 40 }} value={valueUpdated} />
          </Col>
        ) : (
          <Col span={8}>
            <div
              style={{
                backgroundColor: '#FBFBFB',
                minHeight: 40,
                border: '1px solid #D9D9D9',
                borderRadius: 4,
              }}
              className='flex items-center text-center pl-2'>
              {data.content}
            </div>
          </Col>
        )}
        <Col span={2}>
          <Button
            onClick={() => setIsUpdated(!isUpdated)}
            icon={<EditOutlined style={{ fontSize: 24 }} />}
          />
        </Col>

        <Col span={2}>
          <Button
            onClick={() => setIsModalOpen(true)}
            icon={<DeleteFilled style={{ fontSize: 24 }} />}
          />
        </Col>

        {isUpdated && (
          <Col span={2}>
            <Button onClick={onHandelUpdate} icon={<SaveOutlined style={{ fontSize: 24 }} />} />
          </Col>
        )}
      </Row>
    </>
  )
}
