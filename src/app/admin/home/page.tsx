'use client'
import React from 'react'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import { useMutation } from '@tanstack/react-query'
import { createHome } from '@/services/homeServices'

export default function HomePageAdmin() {
  const onFinish = (values: any) => {
    console.log('hihi')

    createHomeMutation.mutate(JSON.parse(values))
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
      <Card title='Card title' bordered={false} style={{ width: '100%', height: '100%' }}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.TextArea />
          </Form.Item>

          {/* <Button
            type='primary'
            style={{ border: '1px solid blue', color: 'black' }}
            htmlType='submit'>
            Submit
          </Button> */}
        </Form>
      </Card>
    </>
  )
}
