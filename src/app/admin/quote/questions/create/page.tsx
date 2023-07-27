'use client'
import React, { useState } from 'react'
import { Button, Card, Col, Form, Input, Radio, RadioChangeEvent, Row, Select } from 'antd'
import { useMutation, useQuery } from '@tanstack/react-query'
import { DeleteFilled } from '@ant-design/icons'
import { createQuestions, getCategoryQuestions } from '@/services/quoteService'
import { useForm } from 'antd/es/form/Form'
import { toast } from 'react-toastify'

const { Option } = Select

const TypeQuestions = [
  {
    label: 'Radio',
    value: 'radio',
  },
  {
    label: 'Text',
    value: 'text',
  },
  {
    label: 'Select',
    value: 'select',
  },
]

type CategoryType = {
  content: string
  createdAt: string | Date
  id: string
  isDeleted: boolean
}

type QuestionsPayload = {
  content: string
  cateQuestionId: string
  type: string
  answers: string[]
}

export default function Answers() {
  const [value, setValue] = useState('radio')
  const [inputs, setInputs] = useState([''])

  const [form] = useForm()

  const { data } = useQuery(
    ['getCategoryQuestions'],
    (): Promise<CategoryType[]> => {
      return getCategoryQuestions()
    },
    {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )

  const onFinish = (values: any) => {
    const payload: QuestionsPayload = {
      cateQuestionId: values.categoryQuestions,
      content: values?.question,
      type: value,
      answers: value === 'text' ? [] : inputs,
    }

    createHomeMutation.mutate(payload)
  }

  const createHomeMutation = useMutation(createQuestions, {
    onSuccess: () => {
      setInputs([''])
      form.resetFields()
      toast.success('Create Successfully!!!')
    },
    onError: () => {
      toast.error('Error, Pls Try again ')
    },
  })

  const handleAddInput = () => {
    const newInputs = [...inputs, '']
    setInputs(newInputs)
  }

  const handleRemoveInput = (index: number) => {
    const inputDeleted = inputs.filter((_, idx) => idx !== index)
    setInputs([...inputDeleted])
  }

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
  }

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }

  return (
    <>
      <Card title='Card title' bordered={false} style={{ width: '100%', height: '100%' }}>
        <Form name='basic' layout='vertical' form={form} onFinish={onFinish} autoComplete='off'>
          <Form.Item
            label='Question'
            name='question'
            rules={[{ required: true, message: 'Please input your Question!' }]}>
            <Input.TextArea placeholder='nhap cau hoi' />
          </Form.Item>
          <Row className='items-center'>
            <Col span={14}>
              <Radio.Group onChange={onChange} className='mb-3' value={value}>
                {TypeQuestions.map(i => (
                  <Radio value={i.value}>{i.label}</Radio>
                ))}
              </Radio.Group>
            </Col>
            <Col>
              <Form.Item
                name='categoryQuestions'
                label='Category'
                rules={[{ required: true, message: 'Please select category!' }]}>
                <Select style={{ minWidth: 220 }} placeholder='select your category'>
                  {data?.map(i => (
                    <Option value={i.id}>{i.content}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          {value !== 'text' && (
            <div>
              {inputs.map((input, index) => (
                <Row gutter={16} key={index}>
                  <Col span={22}>
                    <Input
                      key={index}
                      placeholder='Nhap cau tra loi'
                      value={input}
                      onChange={e => handleInputChange(index, e.target.value)}
                      style={{ marginBottom: '10px' }}
                    />
                  </Col>
                  <Col span={2}>
                    <DeleteFilled
                      onClick={() => handleRemoveInput(index)}
                      style={{ color: 'red', fontSize: 16 }}
                    />
                  </Col>
                </Row>
              ))}
              <Row className='justify-end'>
                <Button onClick={handleAddInput}>Thêm Cau Tra loi</Button>
              </Row>
            </div>
          )}
        </Form>

        <Button
          type='primary'
          onClick={() => form.submit()}
          style={{ border: '1px solid blue', color: 'black' }}
          htmlType='submit'>
          Submit
        </Button>
      </Card>
    </>
  )
}
