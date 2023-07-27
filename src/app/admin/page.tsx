'use client'
import React from 'react'
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'
import { createHome } from '@/services/homeServices'
import { useMutation } from '@tanstack/react-query'

export default function HomePageAdmin() {
  const onFinish = (values: any) => {
    console.log('hihi')

    createHomeMutation.mutate(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const createHomeMutation = useMutation(createHome, {
    onSuccess: data => {
      console.log('data', data)
    },
    onError: err => {
      console.log('errerr', err)
    },
  })

  return (
    <>
      <Card
        title='Card title'
        bordered={false}
        style={{ width: '100%', height: '100%' }}
        extra={
          <Row>
            <Col>
              <Button>New</Button>
            </Col>
            <Col>
              <Button>Edit</Button>
            </Col>
          </Row>
        }>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Form.Item
            label='Title'
            name='title'
            rules={[{ required: true, message: 'Please input your title!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Content'
            name='content'
            rules={[{ required: true, message: 'Please input your content!' }]}>
            <Input.TextArea />
          </Form.Item>

          <Button
            type='primary'
            style={{ border: '1px solid blue', color: 'black' }}
            htmlType='submit'>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  )
}
