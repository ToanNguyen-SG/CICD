'use client'

import { Col, Form, Input, Row } from 'antd'
import React from 'react'
import './index.css'
import { RequestPayload } from '@/types'

type Props = {
  payloadCreate: RequestPayload | undefined
  setPayloadCreate: (data: RequestPayload) => void
  form: any
}

export default function StepOne({ form, payloadCreate, setPayloadCreate }: Props) {
  const onFinish = (data: RequestPayload) => {
    setPayloadCreate({ ...payloadCreate, ...data })
  }
  const onChange = (e: any) => {
    // setPayloadCreate({ ...payloadCreate, ...data })

    console.log('ee', e)
  }

  return (
    <Col>
      <Row>
        <p className='text-[#17C5C5] text-[40px]'>Enter your information</p>
      </Row>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        form={form}
        layout='vertical'
        onChange={onChange}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'>
        <Form.Item
          name='fullName'
          rules={[{ required: true, message: 'Please input your fullName!' }]}>
          <Input placeholder='Your Full Name' className='INPUT_QUOTE' />
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input placeholder='Your Email' className='INPUT_QUOTE' />
        </Form.Item>
        <Form.Item
          name='phone'
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input placeholder='Your Phone' className='INPUT_QUOTE' />
        </Form.Item>
        <Form.Item
          name='company'
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input placeholder='Company' className='INPUT_QUOTE' />
        </Form.Item>
        <Form.Item
          name='position'
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input placeholder='Your position' className='INPUT_QUOTE' />
        </Form.Item>
      </Form>
    </Col>
  )
}
