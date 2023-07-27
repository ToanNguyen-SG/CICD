import { QuestionsType } from '@/types'
import { CheckOutlined } from '@ant-design/icons'
import React, { useCallback, useState } from 'react'

type Props = {
  setCateSelected: (id: string) => void
  cateSelected: string
  //   setAnswers: (data: QuestionsType[]) => void
  questions: {
    question: string
    answers: {
      id: string
      content: string
    }[]
  }
}

export default function StepTwo({ questions, setCateSelected, cateSelected }: Props) {
  const buttonRender = useCallback(() => {
    return (
      <>
        {questions.answers.map(i => {
          return (
            <span
              onClick={() => {
                setCateSelected(i?.id || '')
                if (cateSelected !== i?.id) {
                  //   setAnswers([])
                }
              }}
              key={i.id}
              style={{
                border: '2px solid #17C5C5',
                borderRadius: 8,
                backgroundColor: i.id === cateSelected ? '#146464' : 'black',
              }}
              className='w-[268px] h-[65px] text-[#FFFFFF] text-[25px] flex items-center pl-3 justify-between mb-4 cursor-pointer'>
              A. {i.content}
              {i.id === cateSelected && <CheckOutlined className='mr-3' />}
            </span>
          )
        })}
      </>
    )
  }, [questions, cateSelected])

  return (
    <div className='flex flex-col'>
      <div className='text-[#17C5C5] text-[40px]'> 1. {questions?.question}</div>
      {buttonRender()}
    </div>
  )
}
