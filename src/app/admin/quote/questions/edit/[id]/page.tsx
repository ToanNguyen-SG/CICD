'use client'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, Radio, RadioChangeEvent, Row, Select } from 'antd'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getCategoryQuestions, getQuestionById, updateQuestions } from '@/services/quoteService'
import { useForm } from 'antd/es/form/Form'
import { toast } from 'react-toastify'
import { QuestionsType } from '@/types'

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

export default function Question({ params }: any) {
  const { id } = params

  const [value, setValue] = useState('radio')

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

  const { data: question, refetch } = useQuery(
    ['detailQuestion', id],
    (): Promise<QuestionsType> => {
      return getQuestionById(id)
    },
    {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )

  const onFinish = (values: any) => {
    const payload = {
      id,
      data: { cateQuestionId: values.categoryQuestions, content: values?.question, type: value },
    }

    updateHomeMutation.mutate(payload)
  }

  const updateHomeMutation = useMutation(updateQuestions, {
    onSuccess: () => {
      refetch()
      toast.success('Update Successfully!!!')
    },
    onError: e => {
      toast.error('Error, Pls Try again ')
    },
  })

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    form.setFieldsValue({
      question: question?.content,
      categoryQuestions: question?.cateQuestionId,
    })
    if (question) setValue(question.type)
  }, [question])

  return (
    <>
      <Card title='Card title' bordered={false} style={{ width: '100%', height: '100%' }}>
        <Form name='basic' layout='vertical' form={form} onFinish={onFinish} autoComplete='off'>
          <Form.Item label='Question' name='question'>
            <Input.TextArea defaultValue={question?.content} placeholder='nhap cau hoi' />
          </Form.Item>
          <Row className='items-center'>
            <Col span={14}>
              <Radio.Group
                defaultValue={question?.type}
                onChange={onChange}
                className='mb-3'
                value={value}>
                {TypeQuestions.map(i => (
                  <Radio value={i.value}>{i.label}</Radio>
                ))}
              </Radio.Group>
            </Col>
            <Col>
              <Form.Item name='categoryQuestions' label='Category'>
                <Select
                  defaultValue={question?.cateQuestionId}
                  style={{ minWidth: 220 }}
                  placeholder='select your category'>
                  {data?.map(i => (
                    <Option value={i.id}>{i.content}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
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
