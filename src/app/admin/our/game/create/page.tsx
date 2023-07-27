'use client'
import { createOurService } from '@/services/ourService'
import { OurTypeEnum } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, Row } from 'antd'
import React from 'react'

const { TextArea } = Input

export default function page() {
  const createMutation = useMutation(createOurService, {
    onSuccess: data => {
      console.log('datadata', data)
    },
    onError: err => {
      console.log('err', err)
    },
  })

  const onFinish = (data: any) => {
    createMutation.mutate({ ...data, typeOur: OurTypeEnum.service })
  }

  return (
    <div className='w-full h-full'>
      <Card
        className='w-full h-full'
        title='Our Service'
        extra={
          <Row>
            <Col>
              <Button>Create</Button>
            </Col>
          </Row>
        }>
        <Form name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
          <Row gutter={24} className='mt-2 items-center'>
            <Col span={12}>
              <Form.Item
                label='Service Name'
                name='name'
                rules={[{ required: true, message: 'Please input your category!' }]}>
                <Input placeholder='Category....' />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label='Description'
                name='description'
                rules={[{ required: true, message: 'Please input your category!' }]}>
                <TextArea placeholder='Description....' />
              </Form.Item>
            </Col>
          </Row>
          <Row className='flex justify-end'>
            <Button htmlType='submit'>Create New Service </Button>
          </Row>
        </Form>
      </Card>
    </div>
  )
}
