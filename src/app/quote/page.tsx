'use client'

import DownloadPDF from '@/components/QuoteSteps/DownloadPDF'
import Questions from '@/components/QuoteSteps/Questions'
import StepOne from '@/components/QuoteSteps/StepOne'
import StepTwo from '@/components/QuoteSteps/StepTwo'
import { createRequest, getAllQuestionByCate, getCategoryQuestions } from '@/services/quoteService'
import { CategoryType, QuestionsType, RequestPayload } from '@/types'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Col, Row } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function Quote() {
  const [steps, setSteps] = useState(1)
  const [cateSelected, setCateSelected] = useState<string>('')
  const [payloadCreate, setPayloadCreate] = useState<RequestPayload>()
  const [allQuestionInCate, setAllQuestionInCate] = useState<QuestionsType[]>([])
  const [dataNeedPrint, setDataNeedPrint] = useState<any>()
  const [form] = useForm()

  const { data } = useQuery(
    ['getCategoryQuestions'],
    (): Promise<CategoryType[]> => {
      return getCategoryQuestions() || []
    },
    {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  )

  const stepRender = useCallback(() => {
    switch (steps) {
      case 1:
        return (
          <StepOne form={form} setPayloadCreate={setPayloadCreate} payloadCreate={payloadCreate} />
        )

      case 2: {
        const props = {
          question: 'What do you need help with?',
          answers: data?.map(i => ({ content: i.content, id: i.id })) || [],
        }

        return (
          <StepTwo
            setCateSelected={setCateSelected}
            cateSelected={cateSelected}
            questions={props}
          />
        )
      }
      case 100: {
        return <DownloadPDF jsonData={dataNeedPrint} />
      }

      default: {
        return (
          <Questions
            questions={allQuestionInCate || []}
            steps={steps}
            setAllQuestionInCate={setAllQuestionInCate}
          />
        )
      }
    }
  }, [steps, cateSelected, allQuestionInCate, data])

  useEffect(() => {
    if (cateSelected.length > 0) {
      const getData = async () => {
        const res = await getAllQuestionByCate(cateSelected)
        setAllQuestionInCate(res)
        setSteps(3)
      }
      getData()
    }
  }, [cateSelected])

  const createRequestMutation = useMutation(createRequest, {
    onSuccess: data => {
      setDataNeedPrint(data)
      setSteps(100)
    },
    onError: err => {
      console.log('errerr', err)
    },
  })

  const onFinish = () => {
    const formValue = form.getFieldsValue(['fullName', 'email', 'phone', 'company', 'position'])

    const payload: RequestPayload = {
      ...formValue,
      serviceUWant: 'hehe',
      RequestAnswers:
        allQuestionInCate?.map(i => {
          if (i.type === 'text') {
            return {
              question: i.content,
              answer: i.answers[0]?.answer || '',
            }
          } else {
            return {
              question: i.content,
              answer: i.answers[0]?.answer || '',
            }
          }
        }) || [],
    }

    createRequestMutation.mutate(payload)
  }

  const currentStep = useMemo(() => {
    return allQuestionInCate?.length > 0 ? 2 + allQuestionInCate.length : 2
  }, [allQuestionInCate])

  return (
    <div className='w-full h-full relative  '>
      {/* <Intro /> */}
      <div className='pl-[160px] pt-[120px]'>{stepRender()} </div>
      {steps !== 100 && (
        <Row className='text-[#FFFFFF] items-center absolute bottom-10 w-full pl-[160px] pr-[40px]'>
          <Col span={12}>
            <Row className='text-[25px] items-center'>
              <Button
                disabled={steps === 1}
                onClick={() => setSteps(pre => pre - 1)}
                icon={<LeftOutlined disabled className='cursor-pointer text-[18px] text-[#FFF]' />}
              />

              <span className='mr-4 ml-4'>
                {steps}/{currentStep}
              </span>

              <Button
                disabled={steps === currentStep}
                onClick={() => setSteps(pre => pre + 1)}
                icon={<RightOutlined className='cursor-pointer text-[18px] text-[#FFF]' />}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row className='items-center justify-end'>
              <Col>
                <Button
                  onClick={onFinish}
                  style={{ border: '1px solid #17C5C5' }}
                  className='text-[#17C5C5] w-[268px] h-[65px] mr-4'>
                  Submit
                </Button>
              </Col>
              <Col>
                <div className='text-[20px]'>or press enter</div>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  )
}
